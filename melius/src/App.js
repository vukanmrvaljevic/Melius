import React from "react"
import "./App.css"
import { Switch, Route, Link } from "react-router-dom"
import HomePage from "./screens/Home/HomePage"
import Choices from "./screens/Choices/Choices"
import Progress_bar from "./screens/Progress_Bar/progress_bar"
import table_viewing from "./screens/Table_Viewing/Table_Viewing"
import CreateAccount from "./screens/Links/Create_Account"
import SignUp from "./screens/Links/SignUp"

function App() {
  return (
    <div>
      <div className="Links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link_one" to="/choices">
          Choices
        </Link>
        <Link className="link_two" to="/create_login">
          Login_in
        </Link>
        <Link className="link_three" to="/SignUp">
          Register
        </Link>
        <Link className="link_four" to="/progress_bar">
          Progress Bar
        </Link>
        <Link className="link_five" to="/table_viewing">
          Table Viewing
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create_account" component={CreateAccount} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/choices" component={Choices} />
        <Route exact path="/progress_bar" component={Progress_bar} />
        <Route exact path="/table_viewing" component={table_viewing} />
      </Switch>
    </div>
  )
}

export default App
