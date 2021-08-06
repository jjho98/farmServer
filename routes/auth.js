const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { isAuthenticated, isNotLoggedIn, isLoggedIn } = require("./middlewares");
const { refreshToken, customerCrud } = require("../crud");
const router = express.Router();
const CreateError = require("http-errors");
const { sendVerificationSms, verifyCode } = require("../utils/twilio");

// const opt = {
//   // 배포 시에 RS256 사용
//   // algorithm: 'RS256',
//   expiresIn: '30m'
// }

router.post("/login", isNotLoggedIn, async (req, res, next) => {
  passport.authenticate("localCustomer", (authError, user, info) => {
    if (authError) {
      return next(authError);
    }
    if (!user) {
      return res.status(404).json(info);
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        return next(loginError);
      }
      return res.status(200).json({ message: "로그인 성공" });
    });
  })(req, res, next);
});

router.post("/join", isNotLoggedIn, async (req, res, next) => {
  try {
    const { customer, created } = await customerCrud.createLocalUser(req.body);

    // 기존에 email로 가입한 사람이 존재
    if (!created) {
      res.status(409).json({ message: "이미 가입된 이메일입니다" });
    }
    // 회원가입 성공
    else {
      return req.login(customer, async (loginError) => {
        if (loginError) {
          next(loginError);
          return res
            .status(401)
            .json({ message: "로그인 과정에서 문제가 발생했습니다" });
        }
        return res.status(201).json({ message: "회원가입 됐습니다" });
      });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  try {
    req.logout();
    req.session.destroy();
    res.status(200).json({ message: "로그아웃 성공" });
  } catch (err) {
    next(err);
  }
});

router.post("/sms", async (req, res, next) => {
  try {
    sendVerificationSms(req.body.phoneNumber);
  } catch (err) {
    next(err);
  }
});

router.post("/sms/verify", async (req, res, next) => {
  try {
    const result = await verifyCode(req.body.phoneNumber, req.body.typedCode);
    if (result === "succeed") {
      return res.status(200).json({ message: "ok" });
    } else {
      return res.status(409).json({ message: "fail" });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/kakao", passport.authenticate("kakao"));

router.get("/kakao/callback", passport.authenticate("kakao"), (req, res) => {
  res.status(200).json({ message: "카카오 로그인" });
});

// accessToken 사용 시간 만료 후 다시 토큰 요청
// router.get('/token/refresh', isAuthenticated, async (req, res, next) => {
//   const nickname = req.cookies.nickname
//   const sentRefreshToken = req.cookies.refreshToken
//   try {
//     const foundRefreshToken = await refreshToken.find(nickname, sentRefreshToken)
//     if (!foundRefreshToken) {
//       return next(CreateError(401, 'InvalidRefresh'))
//     }
//     const user = await user.findByNickname(nickname)
//     const accessToken = jwt.sign(
//       { nickname: user.nickname, role: user.role },
//       process.env.JWT_SECRET,
//       opt
//     )
//     res.status(200).json({accessToken})
//   } catch(err) {
//     next(err)
//   }
// })

// // refreshToken 삭제 요청
// router.post('/token/reject', isAuthenticated, async (req, res, next) => {
//   try {
//     const nickname = req.cookies.nickname
//     const sentRefreshToken = req.cookies.refreshToken
//     const foundRefreshToken = await refreshToken.find(nickname, sentRefreshToken)
//     if (foundRefreshToken) {
//       await refreshToken.delete(foundRefreshToken)
//     }
//     res.status(200).json({message: '삭제 완료'})
//   } catch(err) {
//     next(err)
//   }
// })

module.exports = router;
