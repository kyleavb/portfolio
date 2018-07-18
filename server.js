const express = require('express');
require('dotenv').config();
const app = express();
const nodemailer = require('nodemailer');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5000;
const questions = require('./questions');
const skills = require('./skillList');
const resume = './public/VanBergenKyle_Resume.pdf'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
app.use(express.static(path.resolve(__dirname, 'public')))
app.get('/getQuestions', (req, res) => {
  console.log('request for front end questions');
  res.send(JSON.stringify(questions));
});

app.get('/getSkills', (req,res) => {
  console.log('request for Skill list');
  res.send(JSON.stringify(skills));
});

app.post('/sendemail', (req, res)=>{
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.PROVIDER_EMAIL,
      pass: process.env.EMAILPASSWORD
    }
  });
  var mailOptions = {
    from: process.env.PROVIDER_EMAIL,
    to: process.env.RECIEVER_EMAIL,
    subject: 'Contact from your Portfolio!',
    text: `You reacived a messaged from: ${req.body.firstName} ${req.body.lastName} reach them at: ${req.body.email}.
    Saying: ${req.body.message}`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
  });
});

app.get('/resume', (req,res) =>{
  res.download('public/VanBergenKyle_Resume_Server.pdf', 'VanBergen_Kyle_Resume.pdf');
})

app.get('*', (req,res, next) => {
  console.log('serving react app')
  res.sendFile(__dirname, '/client', 'build', 'index.html');
})

app.listen(port, () => console.log(`Listening on port: ${port}`));