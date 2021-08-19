import Jwtp  from 'passport-jwt'
import User from "../models/userModel.js";
const JwtStrategy  = Jwtp.Strategy;
const ExtractJwt  = Jwtp.ExtractJwt;
const key= process.env.jwtSecret;
  const opts={};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken() 
  opts.secretOrKey=key
  export default passport=>{
      passport.use(
          new JwtStrategy(opts,(jwt_payload,done)=>{
     User.findById(jwt_payload.id,{password:0,otp:0,otpExp:0,userType:0})
     .then((user)=>{
        console.log(user)
         if(user){
            return done(null,user)}
            else{

            }

     })
     .catch(err=>{
         console.log('err')
     })
          })
      )
  }