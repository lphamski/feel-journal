import React from 'react';
import {Link} from 'react-router-dom';
import WhenSignedIn from './WhenSignedIn';
import WhenSignedOut from './WhenSignedOut';

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
  
  export default Feelbar;