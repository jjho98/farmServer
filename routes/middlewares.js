// 로그인 되어있어야 함
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({message: '로그인이 필요합니다'})
  }
};

// 로그인 안 되어 있어야 함
exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(400).json({message: '이미 로그인 중입니다'})
  }
};