import express  from 'express'
import nodemailer  from 'nodemailer'
import Resume  from '../models/resume.js'
const  router = express.Router();

router.get('/response/:id',async(req, res, next)=> {
    const save =await  Resume.findById(req.params.id)
    res.status(200).json(save);
    // console.log(save)
    
    })
      router.post('/feedback',async(req, res, next)=> {
    
    const {name, email, message } = req.body
    try{
      
    if(!email){
      throw Error('please provide your email')
    }
    if(!message){
      throw Error('please provide message to be sent')
    }
    if(!name){
      throw Error('please provide your name')
    }
      const save = await Resume.create({name,email,message})
      const tran = await nodemailer.createTransport({
          service:'gmail',
          auth:{
              user:'kordtechnol@gmail.com',
              pass: process.env.AAA
          }
      })
let op ={
    from :'ajibadeabd@gmail.com',
    to :email,
    subject :'view sent message',
    html :`
    <div>
    Hello ${name} here is the message you sent
    <p> message: ${message} </p>
    <p> we will reply you shorly </p>

    </div>
    `,
    // text :email,
}
let emailsender =await tran.sendMail(op)
if(emailsender){
    res.status(201).json(
        'thankt for your message we will get back to you asap, also check  your mail'
    );

}
    
    }catch(error){
      res.json(error.message).status(400)
    
    }
    });
    
export default  router;
