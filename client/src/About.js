import React,{Component} from 'react'
import axios from 'axios'
import KyleFace from './img/kyle-face.jpg'

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
            console.log(data.data);
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
        console.log('stuff', this.state.questionList)
        var questions = this.state.questionList
        var num = this.getRandomNum(questions.length)
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
            <div className='section about'>
                <a id='about' className='anchor'/>
                <div className='about-wrapper'>
                    <div className='about-picture'>
                        <img src={KyleFace} alt='this is kyles face'/>
                    </div>
                    <div className='about-info'>
                        <h2>Hello.  I am Kyle.</h2>
                        <p>I was the first kid on my block with a computer. and I have been fascinated with them ever since. I have been coding as a self-taught amateur for about 5 years. I got my start in coding by learning how to make macros and automate repots with Visual Basic with excel while at Bank of America. After that I started diving into JavaScript which lead to a job writing JavaScript repots for various fortune 500 companies. Since I was starting to get into more serious coding, I decided to attend General Assembly coding boot camp, and I have been insatiable ever since.</p>
                        <h2>Get to know me.</h2>
                        <div className={this.state.fade}>
                            <h3>{this.state.curQuestion}</h3>
                            <p>{this.state.curAnswer}</p>
                        </div>
                    </div>
                    <div className='clear'></div>
                </div>
            </div>
        )
    }
}
export default About