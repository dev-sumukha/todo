const jwt = require('jsonwebtoken');

module.exports.requireAuth = function(req,res,next){
    const token = req.cookies.login_token;

    // checking token exists or not
    if(token){
        jwt.verify(token,process.env.JWT_SECRET_KEY,function(err,decodedToken){
            if(err){
                console.log(err);
            } else {
                req.user = decodedToken;
                next();
            }
        });
        next();

    } else {
        res.status(403).json({message:'user unauthorised'});
    }
}
