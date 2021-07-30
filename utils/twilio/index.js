
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
console.log(accountSid)

// 배포 시에는 redis 사용
const verificationCodes = new Map()


const client = require('twilio')(accountSid, authToken, {
  lazyLoading: true
})

exports.sendVerificationSms = (receiverPhone) => {
  verificationNumber = ''
  for (let i = 0; i < 6; i++) {
    verificationNumber += Math.floor(Math.random() * 10)
  }
  verificationCodes.set(receiverPhone, verificationNumber)

  client.messages.create({
    from: '+12019043450',
    to: `+82${receiverPhone.slice(1)}`,
    body: `[Farmon]SMS 인증 번호: ${verificationNumber}`
  })
  .then(message => console.log(message.sid))
  .catch(err => console.error(err))
}

exports.verifyCode = (receiverPhone, typedCode) => {
  return new Promise((resolve, reject) => {
    if (verificationCodes.get(receiverPhone) === typedCode) {
      resolve('succeed')
    } else {
      resolve('fail')
    }
  })
}
