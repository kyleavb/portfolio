import React,{Component} from 'react';
import {Grid, Button} from '@material-ui/core';

class ProjectTech extends Component {
    render(){
        return(
            <Grid container alignContent={'space-around'}>
                <Grid item xs={12}>
                    <Button variant="outlined" color="secondary" href={this.props.proj.github} >Git Hub</Button>
                </Grid>
                <Grid item xs={12}>
                    <h4>Tech Used</h4>
                    <Grid container>
                        {this.props.mappedStack}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default ProjectTech