import React,{Component} from 'react';
import axios from 'axios';
import {Grid} from '@material-ui/core';
import SkillComponent from './SkillComponent'

class Skills extends Component{
    state = {
        skills: '',
        anchorEl: null,
    }

    componentDidMount(){
        axios.get('/getSkills').then((ret) =>{
            this.setState({
                skills: ret.data
            });
        });
    };

    render(){
        let skillsImport = this.state.skills.data
        let mappedSkills = skillsImport ? skillsImport.map((skill, i) => {
            return(<SkillComponent skill={skill} key={i} />)
        }) : '';
        console.log('state', this.state)
        return(
            <Grid>
                <a id='skills' className='anchor'/>
                <h1>Technologies</h1>
                <p><i>Click on a icon for more info!</i></p>
                <Grid container>
                    {mappedSkills}
                </Grid>
            </Grid>
        )
    }
}
export default Skills