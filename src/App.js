import React from 'react';
import Feelbar from './components/navigation/Feelbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Feelbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/> 
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
