import React from "react"
import SignUp from "./SignUp"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../Context/AuthContext"

function Create_Login() {
    return (
      <AuthProvider>
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
              <SignUp />
          </div>
          </Container>
      </AuthProvider>
  )
}

export default Create_Login
