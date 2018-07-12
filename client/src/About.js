import React,{Component} from 'react'
import axios from 'axios'
import {Grid} from '@material-ui/core';
import AboutPicture from './AboutPicture';
import AboutInfo from './AboutInfo';

class About extends Component{
    constructor(props){
        super(props);
        this.state={
            questionList: '',
            curQuestion: '',
            curAnswer: '',
            history:[],
            fade: 'fadein',
        }
        this.newQuestion = this.newQuestion.bind(this)
        this.getRandomNum = this.getRandomNum.bind(this)
        this.fade = this.fade.bind(this)
    }

    componentDidMount(){
        axios.get('/getQuestions').then((data)=>{
            this.setState({
                questionList: data.data
            }, this.newQuestion)
        })
        setInterval(() => {this.newQuestion()}, 10000);
    }

    getRandomNum(max){
        return Math.floor(Math.random() * max)
    }

    fade(type){
        if(type === 'in'){
            this.setState({
                fade: 'fadein'
            })
        }else{
            this.setState({
                fade: 'fadeout'
            })
        }
    }

    newQuestion(){
        var questions = this.state.questionList
        var num = this.getRandomNum(questions.length - 1)
        if(this.state.history.length === questions.length){
            this.setState({
                history: []
            })
        }
        if(this.state.history.indexOf(num) === -1){
            this.state.history.push(num)
            this.setState({
                curQuestion: questions[num].question,
                curAnswer: questions[num].answer,
                fade: 'fadein'
            })
            setTimeout(() => {this.fade('out')}, 9000)
        }else{
            this.newQuestion()
        }
    }

    render(){
        return(
            <Grid container className='about-section'>
                <AboutPicture />
                <AboutInfo fade={this.state.fade} question={this.state.curQuestion} answer={this.state.curAnswer}/>
            </Grid>
        )
    }
}
export default About