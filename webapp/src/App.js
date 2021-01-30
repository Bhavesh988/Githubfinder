import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Main from "./components/Main";
import User from "./components/User"
const App=()=>{
  return(
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/user/:name" exact component={User}></Route>
        <Redirect to="/"><Main/></Redirect>
      </Switch>
    </React.Fragment>
  );
}

export default App;