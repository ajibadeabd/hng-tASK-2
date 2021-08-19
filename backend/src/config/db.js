import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};
const connect = ()=>{ mongoose.connect(process.env.URL,options)
.then(()=>{
    console.log('database connection established')
})
.catch(e=>{
   console.log('error while connecting database',e)
})}
export default connect;