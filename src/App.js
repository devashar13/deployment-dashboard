import React from 'react';
import Header from './Header/Header';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import DeploymentInfo from './DeploymentInfo/DeploymentInfo';



function App() {
 
  return (
    <Router>
      <div className="app">
          <Switch>
              <Route path="/container">
                <Header/>
                <DeploymentInfo/>
              </Route>
              
              <Route path="/">
                <Header/>
                <ProjectInfo/>
                <ProjectInfo/>
                <ProjectInfo/>
              </Route>
              
          </Switch>    
      </div>
    </Router>
  );
}

export default App;
