export const createProject = (project) => {
    return (dispatch, getState) => {
        //async call to database TODO; used to add or do whatever to database
        
        dispatch({type:'CREATE_PROJECT', project});
    }
};