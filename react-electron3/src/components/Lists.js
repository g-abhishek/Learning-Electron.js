import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

const { ipcRenderer } = window.require("electron");



class Lists extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get("https://www.reddit.com/r/aww.json").then(result => {
            this.setState({
                posts: result.data.data.children
            })

            console.log(result.data.data.children)
            }).catch(error => {
                console.log(error)
            })
        }

        openImage=(image)=>{
            ipcRenderer.send('toggle-image', image);
        }

    render() {
        console.log(this.posts)
        return (
            
            // <ul classNameName="list-group list-group-flush">
            //     {this.state.posts.map(post =>
            //         <li key={post.data.id} classNameName="list-group-item">{post.data.title}</li>
            //     )}
            // </ul>
            

            <ul className="list-unstyled">
                {this.state.posts.map(post =>
                    <li key={post.data.id} className="media mb-3" 
                    onClick={()=> this.openImage(post.data.thumbnail)}
                    >
                        <img className="mr-3" src={post.data.thumbnail} alt="thumbnail" width="64px" height="64px"/>
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">{post.data.title}</h5>
                            
                        </div>
                    </li>                    
                )}
            </ul>
                
                
        );
    }
}

export default withRouter(Lists);