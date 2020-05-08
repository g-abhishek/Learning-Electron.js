import React, {Component} from 'react';
import {BrowserWindow as Router, Route, withRouter} from 'react-router-dom';


const { ipcRenderer } = window.require("electron");


class Image extends Component{
    constructor(){
        super();
        this.state={
            imageUrl: ''
        }
    }

    componentDidMount(){
        ipcRenderer.on('image', (event, arg)=>{
            this.setState({
                imageUrl: arg
            })
        })
    }

    render(){
        return <img src={this.state.imageUrl} alt="image"  style={{maxWidth: '100%' }}/>;
    }
}

export default withRouter(Image);