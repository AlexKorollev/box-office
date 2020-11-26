import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navs from './components/Navs'
import Home from './pages/Home'
import Starred from './pages/Starred'

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact={true} path="/">
          <Home></Home>
        </Route>

        <Route exact={true} path="/starred">
          <Starred></Starred>
        </Route>

        <Route>
          error
        </Route>
      </Switch>
    </div>
  );
}

export default App;
