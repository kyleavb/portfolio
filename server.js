const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const questions = require('./questions')
const skills = require('./skillList')

app.get('/getQuestions', (req, res) => {
  console.log('request for front end questions');
  res.send(JSON.stringify(questions));
});

app.get('/getSkills', (req,res) => {
  console.log('request for Skill list');
  res.send(JSON.stringify(skills));
});

app.listen(port, () => console.log(`Listening on port ${port}`));