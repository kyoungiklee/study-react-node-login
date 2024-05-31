const { User } = require('../models/User');

let auth = (req, res, next) => {
    //인증 처리를 하는 곳 

    // 클라이언트 쿠키에서 토큰을 가져온다
    let token = req.cookies.x_auth;
    console.log("x_auth token : " + token);

    // 토큰을 복호화 한후 유저를 찾는다. 
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({isAuth: false, error: true});

        req.token = token;
        req.user = user;
        next();
    })

    // User.findByToken(token).then((user) => {
    //     if(!user) return res.json({isAuth: false, error: true});
    //     req.token = token;
    //     req.user = user;
    //     next();
    // }).catch(err => {
    //     throw err;
    // })
}
// 다른 파일에서도 사용할 수 있도록 exports 함
module.exports = { auth };