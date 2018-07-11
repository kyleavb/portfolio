import React,{Component} from 'react';
import {Grid} from '@material-ui/core';

class AboutInfo extends Component{
    render(){
        return(
            <Grid item sm={12} md={6}>
                <a id='about' className='anchor'/>
                <Grid container>
                    <Grid item xs={12}>
                        <h2>Hello.  I am Kyle.</h2>
                        <p>I was the first kid on my block with a computer. and I have been fascinated with them ever since. I have been coding as a self-taught amateur for about 5 years. I got my start in coding by learning how to make macros and automate repots with Visual Basic with excel while at Bank of America. After that I started diving into JavaScript which lead to a job writing JavaScript repots for various fortune 500 companies. Since I was starting to get into more serious coding, I decided to attend General Assembly coding boot camp, and I have been insatiable ever since.</p>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <h2>Get to know me.</h2>
                        <div className={this.props.fade}>
                            <h3>{this.props.question}</h3>
                            <p>{this.props.answer}</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default AboutInfo