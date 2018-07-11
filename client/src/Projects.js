import React,{Component} from 'react'
import List from './ProjList'
import {Grid, Button} from '@material-ui/core';

class Projects extends Component{
    render(){
        let mappedProjects = List.projects.map((proj, i) => {
            // console.log(proj)
            return(
                <Grid container key={i} className='project-container'>
                    <Grid item xs={12}>
                        <h2>{proj.name}</h2>
                    </Grid>
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Button variant="outlined" color="secondary" href={proj.github}>Git Hub</Button>
                                    {` `}
                                    <Button variant="contained" color="secondary" href={proj.live}>Live Site</Button>
                                    <h4>Tech Used</h4>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <h4>Description:</h4>
                                    <p>{proj.description}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={6}>
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