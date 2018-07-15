import React,{Component} from 'react';
import {Grid, Button} from '@material-ui/core';

class ProjectDescription extends Component{
    render(){
        return(
            <Grid container alignContent={'space-around'}>
                <Grid item xs={12}>
                    <Button variant="outlined" color="primary" href={this.props.proj.live}>Live Site</Button>
                </Grid>
                <Grid item xs={12}>
                    <h4>Description:</h4>
                    <p>{this.props.proj.description}</p>
                </Grid>
            </Grid>
        )
    }
}
export default ProjectDescription