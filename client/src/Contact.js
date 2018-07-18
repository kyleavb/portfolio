import React,{Component} from 'react';
import {Grid, TextField, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Slide} from '@material-ui/core';
import LinkedInIcon from 'mdi-react/LinkedinBoxIcon';
import Resume from 'mdi-react/FileDocumentIcon';
import GitHub from 'mdi-react/GithubCircleIcon';
import axios from 'axios';

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            open: false,
            pdf: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.resumeGet = this.resumeGet.bind(this);
    }
    
    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    resumeGet(){
        axios({
            url: 'http://localhost:3000/resume',
            method: 'GET',
            responseType: 'blob',
          }).then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            // window.open("data:application/pdf," + escape(url)); 
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Van_Bergen_Kyle_Resume.pdf');
            document.body.appendChild(link);
            link.click();
          });
    }
    handleClick(){
        axios.post('/sendemail',{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            message: this.state.message
        }).then(result => {
            if(result.status === 200){
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    open: true,
                    outcome: 'Your message has been sent!'
                })
                setTimeout(()=>{
                    this.setState({
                        open: false
                    })
                }, 2000)
            }else{
                this.setState({
                    open: true,
                    outcome: 'Your message failed to be delievered!'
                })
                setTimeout(()=>{
                    this.setState({
                        open: false
                    })
                }, 2000)
            }
        })
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
                        <a href='https://www.linkedin.com/in/kyle-van-bergen-b45a5bb1/' rel="noopener noreferrer" target="_blank">
                            <LinkedInIcon size={70} color={'#81b9bf'}/>
                        </a>
                        <br />
                        <Button variant="contained" color="secondary" size='large' target="_blank" href='https://www.linkedin.com/in/kyle-van-bergen-b45a5bb1/'>LinkedIn</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <a onClick={this.resumeGet}>
                            <Resume size={70} color={'#81b9bf'}/>
                        </a>
                        <br />
                        <Button variant="contained" color="secondary" onClick={this.resumeGet}>Resume</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <a href='https://github.com/kyleavb/'>
                            <GitHub size={70} color={'#81b9bf'}/>
                        </a>
                        <br />
                        <Button variant="contained" color="secondary" size='large' target="_blank" href='https://github.com/kyleavb/'>GitHub</Button>
                        
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <h3> Get In Touch</h3>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={32}>
                    <Grid item xs={4}>
                        <TextField fullWidth={true} id="firstName" label="First Name" onChange={this.handleChange}>{this.state.firstName}</TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField fullWidth={true} id="lastName" label="Last Name" onChange={this.handleChange}>{this.state.lastName}</TextField>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField fullWidth={true} id="email" label="E-Mail" onChange={this.handleChange}>{this.state.email}</TextField>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField multiline={true} rowsMax={4} fullWidth={true} id="message" label="Enter your message here" onChange={this.handleChange}>{this.state.message}</TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <Button type='button' variant="contained" color="primary" onClick={this.handleClick}>Submit</Button>
                    </Grid>
                    <Dialog open={this.state.open} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                        <DialogTitle id="alert-dialog-slide-title">
                            {`Email Status:`}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                {this.state.outcome}
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
        )
    }
}
export default Contact