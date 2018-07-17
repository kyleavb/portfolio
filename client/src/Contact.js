import React,{Component} from 'react';
import {Grid, TextField, Button} from '@material-ui/core';

class Contact extends Component{
    constructor(){
        super()
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
        console.log(e.target.id)
        console.log(e.target.value)
        this.setState=({
            [e.target.id] : e.target.value
        })
    }

    handleClick(e){
        console.log('Button clicked')
    }
    render(){
        return(
            <Grid container>
                <a id='contact' className='anchor'/>
                <Grid item xs={12}>
                    <h1>Let's connect</h1>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <h3>Interesting Links</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <a>LinkedIn</a>
                        <a href='https://www.linkedin.com/in/kyle-van-bergen-b45a5bb1/' rel="noopener noreferrer" target="_blank"><h5>LinkedIn</h5></a>
                    </Grid>
                    <Grid item xs={4}>
                        <a>Resume</a>
                    </Grid>
                    <Grid item xs={4}>
                        <a>Github?</a>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <h3> Get In Touch</h3>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={32}>
                    <Grid item xs={4}>
                        <TextField fullWidth={true} id="firstName" label="First Name" onChange={this.handleChange}>{this.state.name}</TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField fullWidth={true} id="lastName" label="Last Name" onChange={this.handleChange}>{this.state.name}</TextField>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField fullWidth={true} id="email" label="E-Mail" onChange={this.handleChange}>{this.state.name}</TextField>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField multiline={true} rowsMax={4} fullWidth={true} id="message" label="Enter your message here" onChange={this.handleChange}>{this.state.name}</TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <Button type='button' variant="contained" color="primary" onClick={this.handleClick}>Submit</Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default Contact