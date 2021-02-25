import React from "react"
import "./App.css"
import { Switch, Route, Link } from "react-router-dom"
import { AuthProvider } from "./Context/AuthContext"
import HomePage from "./screens/Home/HomePage"
import Progress_bar from "./screens/Progress_Bar/progress_bar"
import CreateAccount from "./components/Create_Account"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import PurchaseType from "./screens/Purchase Type/PurchaseType"
import SetUpTasks from "./screens/SetUpTasks/SetUpTasks"
import Messenger from "./screens/Messenger/Messenger"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"

function App() {
  return (
    <div>
      <div className="Links">
        <Link className="link" to="/">
          Home
        </Link>
        {/* <Link className="link_three" to="/create_account">
          Register
        </Link> */}
        <Link className="link_three" to="/dashboard">
          Dashboard
        </Link>
        <Link className="link_four" to="/progress_bar">
          Progress Boxes
        </Link>
        <Link className="link_five" to="/Purchase-Type">
          Purchase Type
        </Link>
        <Link className="link_six" to="/Set-Up-Tasks">
          Set Up Tasks
        </Link>
        <Link className="link_six" to="/messenger">
          Messenger
        </Link>
      </div>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create_account" component={CreateAccount} />
          <Route exact path="/purchase-type" component={PurchaseType} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/set-up-tasks" component={SetUpTasks} />
          <Route exact path="/progress_bar" component={Progress_bar} />
          <Route exact path="/messenger" component={Messenger} />
        </Switch>
      </AuthProvider>
    </div>
  )
}

export default App
