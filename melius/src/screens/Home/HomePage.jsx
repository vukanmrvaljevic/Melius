import React from "react"
import {  Link } from "react-router-dom"
import "./HomePage.css"

function HomePage() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        marginTop: 200,
      }}
    />
  )
  const ColoredLineTwo = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        marginTop: 200,
      }}
    />
  )
  return (
      <div>
      <div className="links-style">
          <Link to="/login">Log-In</Link>
          <Link to="/signup">Sign-Up</Link>
          </div>
          <ColoredLine color="gray" />
    <div className="home-title">
        <h1>Welcome to Melius</h1>
        <h4>Your Personal Order Tracker</h4>
          </div>
          <ColoredLineTwo color="gray" />
    </div>
  )
}

export default HomePage
