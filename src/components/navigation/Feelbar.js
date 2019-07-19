import React from 'react';
import {Link} from 'react-router-dom';
import WhenSignedIn from './WhenSignedIn';
import WhenSignedOut from './WhenSignedOut';
import { connect } from 'react-redux';

const Feelbar = (props) => {
    const { auth, profile } = props;
    //console.log(auth);
    const links = auth.uid ? <WhenSignedIn profile={profile}/> : <WhenSignedOut/>
    return (
        <nav className="nav-wrapper grey darken-3">
          <div className="container">  
            <Link to='/' className="brand-logo">Feel Journal</Link>
            {links}
          </div>
        </nav>
    );
  }

const mapStateToProps = (state) => {
  //console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}   
export default connect(mapStateToProps)(Feelbar);