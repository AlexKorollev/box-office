import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show'
import Starred from './pages/Starred'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route exact path="/starred">
        <Starred></Starred>
      </Route>

      <Route 
        exact
        path="/show/:id"
      >
        <Show />
      </Route>

      <Route>
        error
      </Route>
    </Switch>
  );
}

export default App;
