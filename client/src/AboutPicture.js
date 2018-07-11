import React,{Component} from 'react';
import KyleFace from './img/kyle-face.jpg'
import {Grid} from '@material-ui/core';

class AboutPicture extends Component{
    render(){
        return(
            <Grid item sm={12} md={6}>
                <div>
                    <img src={KyleFace} alt='This is kyles face'/>
                </div>
            </Grid>
        )
    }
}
export default AboutPicture