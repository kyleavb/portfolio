import React,{Component} from 'react'
import axios from 'axios';

class Contact extends Component{

    handleClick(){
        axios.get('/resume').then((data)=>{
            console.log(data)
        })
    }

    render(){
        return(
            <div className='section'>
                <a id='contact' className='anchor'/>
                Contact Deails
                <h5>Email</h5>
                <p>KyleAVB@gmail.com</p>
                <a href='https://www.linkedin.com/in/kyle-van-bergen-b45a5bb1/' target="_blank"><h5>LinkedIn</h5></a>
            </div>
        )
    }
}
export default Contact