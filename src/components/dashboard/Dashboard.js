import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
//connects redux to react; glue library that glues the two
import { connect } from 'react-redux';

class Dashboard extends Component{
    
    render(){
        //console.log(this.props);

        const { projects } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1"> 
                        <Notifications/>
                    </div>
                   
                </div>
            </div>
        );
    }
}
//state from rootReducer
const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}
//connect returns a higher order component 
export default connect(mapStateToProps)(Dashboard)