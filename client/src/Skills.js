import React,{Component} from 'react';
import axios from 'axios';
import {Grid} from '@material-ui/core';
import { LanguageJavascriptIcon, NodejsIcon, LanguageHtml5Icon } from 'mdi-react';

class Skills extends Component{
    constructor(props){
        super(props)
        this.state = {
            skills: ''
        }
    }

    componentDidMount(){
        axios.get('/getSkills').then((ret) =>{
            this.setState({
                skills: ret.data
            }, ()=> {
                console.log(this.state)
            })
        })
    }

    render(){ 
        console.log('here', this.state.skills)
        return(
            <Grid>
                <a id='skills' className='anchor'/>
                <h1>Technologies</h1>
                <div>
                    <LanguageJavascriptIcon size={250}/>
                    <NodejsIcon size={250}/>
                    <LanguageHtml5Icon size={250} color={'primary'}/>
                </div>
            </Grid>
        )
    }
}
export default Skills