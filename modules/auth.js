var jwt = require('jsonwebtoken');


exports.generateJWT = async (user) => {
  try {
    var payload = {userId: user.id, email: user.email};
    var token = await jwt.sign(payload, process.env.SECRET);
    return token;
  } catch (error) {
    next(error);
  }
  
}

exports.validateJWT = async (req, res, next) => {
  var token = req.headers['authorization'] || "";
  try {
    if (token) {
      var payload = await jwt.verify(token, process.env.SECRET);
      req.user = payload;
      req.user.token = token;
      next()
    } else {
      res.status(400).json({error: "token required"});
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
  

}