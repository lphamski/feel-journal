const initState = {
    projects: [
        
    ]
}

const projectReducer  = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT': 
            console.log('Created a project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'DELETE_PROJECT':
            console.log('Deleted a project', action.project);
            return state;
        case 'DELETE_PROJECT_ERROR':
                console.log('Deleted a project error', action.err);
                return state;
        default:
            return state;
    }
}

export default projectReducer