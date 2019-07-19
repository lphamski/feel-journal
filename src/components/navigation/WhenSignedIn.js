import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut} from '../../store/actions/authActions';
import {connect } from 'react-redux';

function WhenSignedIn (props){
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Mood Entry</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>LP</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}
//connect takes two params remember that
export default connect(null,mapDispatchToProps)(WhenSignedIn)