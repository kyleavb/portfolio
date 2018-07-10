import React,{Component} from 'react'
import List from './ProjList'
class Projects extends Component{
    render(){
        let mappedProjects = List.projects.map((proj, i) => {
            let temp = i + ' project-description'
            return(
                <div key={i} className='project-container'>
                    <div className={temp}>
                        <h2>{proj.name}</h2>
                        <a href={proj.github}>Git Hub</a>
                        <h5>Description:</h5>
                        <p>{proj.description}</p>
                        <h5>Tech Used</h5>
                    <a href={proj.live}>Live Site</a>
                    </div>
                    <div className='project-img'>
                        <img src={proj.img} alt='project image' />
                    </div>
                </div>
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