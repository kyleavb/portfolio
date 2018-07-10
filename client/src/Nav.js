import React,{Component} from 'react'

class Nav extends Component{
    render(){
        return(
            <div className='nav-bar'>
                <p>
                    <b className='title-name'>Kyle Van Bergen</b>
                    <br />
                    <i>Seattle Based Full Stack Developer</i>
                </p>
                <nav>
                    {/* <a href='#top'>Top</a> */}
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </nav>
            </div>
        )
    }
}
export default Nav