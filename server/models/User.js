const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        // maxLength: 5,
    },
    lastname: {
        type: String,
        maxLength: 50,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
})
userSchema.pre('save', function(next) {

    let user = this;

    if(user.isModified('password')) {
        //비밀번호를 암호화한다. 
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch){
        if (err) cb(err);
        cb(null, isMatch);
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    //jsonwebtoken을 이용해서 token을 생성하기
    // token에서 'secreteToken'을 이용하여 user._id를 찾을수 있으므로 
    // 요청자가 누구인지 확인할 수 있다. 
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    user.token = token;
    user.save().then(() => {
        cb(null, user);
    }).catch(err => {
        cb(err);
    }) 
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    // token을 디코드한다. 

    console.log("User.findByToken: " + token);

    jwt.verify(token, 'secretToken', function(err, decoded){
        //유저아이디를 사용해서 유저를 찾은 다음에
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        user.findOne({ "_id": decoded, "token": token }).then((user) => {
            //if(!user) cb("사용자가 존재하지 않습니다.", null);
            cb(null, user);
        }).catch(err => {
            cb(err);
        })

    })
}


const User = mongoose.model("User", userSchema)

module.exports = {User}