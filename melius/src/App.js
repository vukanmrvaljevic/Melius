import React from "react"
import "./App.css"
import { Switch, Route, Link } from "react-router-dom"
import HomePage from "./screens/Home/HomePage"
import Progress_bar from "./screens/Progress_Bar/progress_bar"
import CreateAccount from "./screens/Links/Create_Account"
import SignUp from "./screens/Links/SignUp"
import PurchaseType from "./screens/Purchase Type/PurchaseType"
import SetUpTasks from "./screens/SetUpTasks/SetUpTasks"

function App() {
  return (
    <div>
      <div className="Links">
        <Link className="link" to="/">
          Home
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
        <Link className="link_five" to="/Purchase-Type">
          Purchase Type
        </Link>
        <Link className="link_six" to="/Set-Up-Tasks">
          Set Up Tasks
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create_account" component={CreateAccount} />
        <Route exact path="/purchase-type" component={PurchaseType} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/set-up-tasks" component={SetUpTasks} />
        <Route exact path="/progress_bar" component={Progress_bar} />
      </Switch>
    </div>
  )
}

export default App
