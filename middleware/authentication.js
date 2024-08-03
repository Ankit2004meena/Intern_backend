// // server/middleware/authentication.js
// const moment = require('moment');

// const browserAuthentication = (req, res, next) => {
//   const { userAgent } = req.headers;

//   if (userAgent.includes('Chrome')) {
//     return res.status(401).send('OTP required'); // Or trigger OTP logic
//   }

//   next();
// };

// const deviceAndTimeBasedAccess = (req, res, next) => {
//   const { deviceType } = req.headers;

//   if (deviceType === 'Mobile') {
//     const currentHour = moment().hour();
//     if (currentHour < 10 || currentHour > 13) {
//       return res.status(403).send('Access denied on mobile devices outside of 10 AM to 1 PM');
//     }
//   }

//   next();
// };

// module.exports = { browserAuthentication, deviceAndTimeBasedAccess };
