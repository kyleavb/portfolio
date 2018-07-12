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

    randomColor(){
        return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
    }

    createComponent(icon){
        const IconLocate = Icons[icon];
        return <IconLocate  size={70} color={this.randomColor()} className='skill-icon' />;
    }

    render(){
        let runTimeComp = this.createComponent(this.props.skill.icon);
        let render = this.state.popOpen
        return(
            <Grid item xs={2} onClick={this.handleIconClick} color={'primary'}>
                {runTimeComp}
                <Popover
                    anchorEl={this.state.anchorEl}
                    open={render}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                    <Grid container>
                        <Grid item xs={12}>
                            <p>{this.props.skill.name}</p>
                            <p>{this.props.skill.blurb}</p>
                        </Grid>
                    </Grid>
                </Popover>
                <p>{this.props.skill.name}</p>
            </Grid>
        )
    }
}
export default SkillComponent;