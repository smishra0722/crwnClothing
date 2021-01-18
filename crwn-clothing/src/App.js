import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
const HatsPage = (props) => {
  console.log(props);
  return (
    <div> <h1> HatsPage</h1> </div>
  )
};
const HatsPage2 = (props) => {
  console.log(props);
  return (
  <div> 
    <button onClick={() => props.history.push('/')}>HomePage</button>
    <Link to='/hats'>Hats1</Link> 
    <h1> HatsPage2:{props.match.params.topicId}</h1> 
  </div>
);}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route path='/hats/:topicId' component={HatsPage2} />
      </Switch>
      
    </div>
  );
}

export default App;
