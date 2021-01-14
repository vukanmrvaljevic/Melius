import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./screens/Home/HomePage"
import Choices from "./screens/Choices/Choices"
import Progress_bar from "./screens/Progress_Bar/progress_bar"
import table_viewing from "./screens/Table_Viewing/Table_Viewing"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/choices" component={Choices} />
        <Route exact path="/progress_bar" component={Progress_bar} />
        <Route exact path="/table_viewing" component={table_viewing} />
      </Switch>
    </div>
  )
}

export default App
