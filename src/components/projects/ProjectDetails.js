import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">My Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipiciting elit.</p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <div>Posted by Leon Pham</div>
                    <div>8th, July 2019, 11:00PM</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails