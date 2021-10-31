import './App.css'
import React from "react";
import {Header} from './components'
import Home from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import Cart from "./pages/Cart";


function App() {

  return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <Switch>
                  <Route path={"/home"} component={Home}/>
                  <Route path={"/cart"} component={Cart}/>
                  <Route component={Home}/>
              </Switch>
          </div>
      </div>
  )
}

export default App
