import React, { Component } from 'react';
import {createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';

//just testing my github configs
class CreateProject extends Component {
    state = {
        title: '',
        body: ''
        
    }
    //Don't need to change handleChange cause its pretty generic
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault(); //keep to prevent from reloading.
        this.props.createProject(this.state)
    }

    render() {
        {/* going to need a class component to store a local state of user data */}
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Today's Mood</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="body">Body</label>
                        <textarea id="body" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Entry</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
//first parameter to connect is mapStateToProps
export default connect(null,mapDispatchToProps)(CreateProject)