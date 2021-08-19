import mongoose from 'mongoose'
const  {Schema,model} = mongoose
// const { string } = require('joi')
let resumeSchema= new Schema({
    email:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    
},
{timestamps:true})


export default  mongoose.model('resume', resumeSchema)