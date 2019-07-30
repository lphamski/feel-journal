import React, { Component } from 'react';
import {deleteProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'; //Might need this 
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import { createHashHistory } from 'history/createBrowserHistory';
 
class DeleteProject extends Component {
    constructor(props) { 
        super(props);
        
        //console.log(this.props); // props will get logged.
      }



    handleClick = (e) =>{
        e.preventDefault(); //keep to prevent from reloading.
        this.props.deleteProject(this.props);
        //sends user back to homepage after deleting an entry
        this.props.history.push('/');
    }

    

    render() {
        return (
            <div className="container">
               <Fab onClick={this.handleClick} aria-label="delete">
                    <DeleteIcon />
                </Fab>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (project) => dispatch(deleteProject(project))
    }
}
//first parameter to connect is mapStateToProps
export default connect(null,mapDispatchToProps)(DeleteProject)