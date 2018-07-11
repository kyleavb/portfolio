import React,{Component} from 'react'
import {AppBar, Button, Grid} from '@material-ui/core';

class Nav extends Component{
    render(){
        return(
            <AppBar position='sticky'>
                <div className='nav-bar'>
                    <b className='title-name'>Kyle Van Bergen</b>
                    <br />
                    <i>Seattle Based Full Stack Developer</i>
                    <Grid container spacing={24} className='navtags'>
                        <Grid item xs={6} sm={3}>
                            <Button size='large' href='#about'>About</Button>                           
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Button size='large' href='#skills'>Skills</Button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Button size='large' href='#projects'>Projects</Button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Button size='large' href='#contact'>Contact</Button>
                        </Grid>
                    </Grid>
                </div>
            </AppBar>
        )
    }
}
export default Nav