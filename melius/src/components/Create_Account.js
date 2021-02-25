import React from "react"
import SignUp from "./SignUp"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../Context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

export default function Create_Account() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div>
          <Link className="one" to="/signup">
            Sign-Up
          </Link>
          <Link className="two" to="/login">
            Log-In
          </Link>
        </div>

        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}
