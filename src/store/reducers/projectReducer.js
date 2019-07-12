const initState = {
    projects: [
        {id: '1', title: 'help me killbill', content: 'blah blah'},
        {id: '2', title: 'help me skydive', content: 'blah blah'},
        {id: '3', title: 'help me backflip', content: 'blah blah'},
    ]
}

const projectReducer  = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT': 
            console.log('Created a project', action.project)
    }
    return state;
}

export default projectReducer