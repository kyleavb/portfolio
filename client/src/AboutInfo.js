import React,{Component} from 'react';
import {Grid} from '@material-ui/core';

class AboutInfo extends Component{
    render(){
        return(
            <Grid item sm={12} md={6}>
                <a id='about' className='anchor'/>
                <Grid container className='intro-words'>
                    <Grid item xs={12}>
                        <h2>Hello.  I am Kyle.</h2>
                        <p className='intro-para'>&nbsp;&nbsp;&nbsp;&nbsp;Enthusiastic and result-driven professional with over five years of information technology and code consulting experience. Avid gamer and tech enthusiast with knowledge of virtual reality and the Unity game engine . Motivated life-long learner looking to pivot my previous experiences into web development and to further my understanding of complex platforms and enhance my experience with various technology stacks.</p>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <h2>Get to know me.</h2>
                        <div className={this.props.fade}>
                            <h3>{this.props.question}</h3>
                            <p className='intro-para'>{this.props.answer}</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default AboutInfo;