import React,{Component} from 'react'
import List from './ProjList';
import {Grid} from '@material-ui/core';
import ProjectTech from './ProjectTech';
import ProjectImg from './ProjectImg';
import ProjectDescription from './ProjectDescription'

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
                        <Grid item sm={12} md={4}>
                            <ProjectTech proj={proj} mappedStack={mappedStack} />
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <ProjectImg proj={proj} />
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <ProjectDescription proj={proj} />
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