import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./screens/Home/HomePage"
import Choices from "./screens/Choices/Choices"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/choices" component={Choices} />
      </Switch>
    </div> 
  )
}

export default App
