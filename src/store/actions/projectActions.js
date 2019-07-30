export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to database TODO; used to add or do whatever to database

        const firestore = getFirestore(); //gives us a refference to firebase database
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        //console.log(profile);

        firestore.collection('projects').add({
            ...project, //same as project.title, project.content
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        }) 
        console.log('added to FIREBASE');
    }
};


export const deleteProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        
        firestore.collection('projects').doc(project.toDelete).delete().then(() => {
            dispatch({type: 'DELETE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'DELETE_PROJECT_ERROR', err});
        })
        console.log('deleted from FIREBASE');

    }
};