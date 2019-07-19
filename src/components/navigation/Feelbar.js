import React from 'react';
import {Link} from 'react-router-dom';
import WhenSignedIn from './WhenSignedIn';
import WhenSignedOut from './WhenSignedOut';
import { connect } from 'react-redux';

function Feelbar() {
    return (
        <nav className="nav-wrapper grey darken-3">
          <div className="container">  
            <Link to='/' className="brand-logo">Feel Journal</Link>
            <WhenSignedIn/>
            <WhenSignedOut/>
          </div>
        </nav>
    );
  }

const mapStateToProps = (state) => {
  console.log(state);
  return{

  }
}   
export default connect(mapStateToProps)(Feelbar);