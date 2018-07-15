import React,{Component} from 'react';
import {Grid, Modal, Paper} from '@material-ui/core';
import * as Icons from 'mdi-react';
  
class SkillComponent extends Component{
    state={
        popOpen: false,
    }

    handleIconClick = e => {
        this.state.popOpen ? this.setState({popOpen: false}) : this.setState({popOpen: true})
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
                <Modal open={render} disableAutoFocus>
                    <Grid container>
                        <Grid item xs={6} className='modal-box'>
                            <Paper>
                                <h1>{this.props.skill.name}</h1>
                                <p>{this.props.skill.blurb}</p>
                                <h3>Experiance</h3>
                                <p className='modal-text'>{this.props.skill.related}</p>
                                <br />
                                
                                <Grid container>
                                    <Grid item xs={12}>
                                        <h3>Details</h3>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>{`Years: ${this.props.skill.years}`}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>{`Comfort: ${this.props.skill.stars}`}</p>
                                    </Grid>
                                </Grid>
                                <p><i>click anywhere to close</i></p>
                            </Paper>
                        </Grid>
                    </Grid>
                </Modal>
                <p>{this.props.skill.name}</p>
            </Grid>
        )
    }
}
export default SkillComponent;