import React,{Component} from 'react';
import {Grid, Popover} from '@material-ui/core';
import * as Icons from 'mdi-react';

class SkillComponent extends Component{
    state={
        popOpen: false,
        anchorEl: null
    }

    handleIconClick = e => {
        if(this.state.popOpen){
            this.setState({
                popOpen: false,
                anchorEl: null
            })
        }else{
            this.setState({
                popOpen: true,
                anchorEl: e.target
            })
        }
        
    };

    createComponent(icon){
        const IconLocate = Icons[icon];
        return <IconLocate  size={50} className='skill-icon' />;
    }

    render(){
        let runTimeComp = this.createComponent(this.props.skill.icon);
        let render = this.state.popOpen
        console.log(this.state.anchorEl)
        return(
            <Grid item xs={2} onClick={this.handleIconClick}>
                {runTimeComp}
                <Popover
                    anchorEl={this.state.anchorEl}
                    open={render}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    >
                    <p>I use {this.props.skill.name}.</p>
                </Popover>
                <p>{this.props.skill.name}</p>
            </Grid>
        )
    }
}
export default SkillComponent



//                     <LanguageJavascriptIcon />
//                     <NodejsIcon size={250} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} className='skill-icon'/>
//                     <LanguageHtml5Icon size={250} color={'primary'} className='skill-icon'/>
//                 </div>
//                 