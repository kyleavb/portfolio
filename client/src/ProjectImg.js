import React,{Component} from 'react';
import {Grid} from '@material-ui/core';

class ProjectImg extends Component{
    render(){
        return(
            <Grid container>
                <Grid item xs={12}>
                    <div>
                        <img src={this.props.proj.img} alt={`Project ${this.props.proj.name}`} />
                    </div>
                </Grid>
            </Grid>
        )
    }
}
export default ProjectImg;