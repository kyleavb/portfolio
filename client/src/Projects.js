import React,{Component} from 'react'
import List from './ProjList'
import {Grid, Button} from '@material-ui/core';
import { TeacherIcon } from '../node_modules/mdi-react';

class Projects extends Component{
    render(){
        let mappedProjects = List.projects.map((proj, i) => {
            let mappedStack = proj.tech.map((item, i ) => {
                return(
                    <Grid item xs={4} key={i}>
                        <p>{item}</p>
                    </Grid>
                )
            })
            return(
                <Grid container key={i} className='project-container'>
                    <Grid item xs={12}>
                        <h2>{proj.name}</h2>
                    </Grid>
                    <Grid container>
                        <Grid item sm={12} md={8}>
                            <Grid container alignContent={'space-around'}>
                                <Grid item xs={6}>
                                    <Button variant="outlined" color="secondary" href={proj.github}>Git Hub</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="outlined" color="primary" href={proj.live}>Live Site</Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6}>
                                    <h4>Tech Used</h4>
                                    <Grid container>
                                        {mappedStack}
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <h4>Description:</h4>
                                    <p>{proj.description}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <div className='img-holder'>
                                <img src={proj.img} alt={`Image for ${proj.name}`} />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })

        return(
            <div className='section'>
                <a id='projects' className='anchor'/>
                <h1>Projects</h1>
                {mappedProjects}
            </div>
        )
    }
}
export default Projects