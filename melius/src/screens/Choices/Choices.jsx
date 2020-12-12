import React from "react"
import "./Choices.css"
import { Link } from "react-router-dom"

function Choices() {
  return (
    <div>
      <Link className="one" to="/actors">
        Option 1: Progress Bar
      </Link>
      <Link className="two" to="/literature">
        Option 2: Table Viewing
      </Link>
     
    </div>
  )
}

export default Choices
