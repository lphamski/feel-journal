const initState = {
    authError: null
}

const authReducer  = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('fail yo');
            return {
                ...state,
                authError: 'Login has failed' //generic error
            }
        case 'LOGIN_SUCCESS':
            console.log('success yo');
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success yooo');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('sign up succces');
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error fail')
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer