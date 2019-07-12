import React from 'react';


const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project summary">
                <div className="card-content grey-yext text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Leon Pham</p>
                    <p className="grey-text">9th July, 10:34PM </p>
                </div>
            </div>
    )
}

export default ProjectSummary
