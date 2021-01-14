import React from "react"
import "./Choices.css"
import { Link } from "react-router-dom"

function Choices() {
  return (
    <div>
      <Link className="one" to="/progress_bar">
        Option 1: Progress Bar
      </Link>
      <Link className="two" to="/table_viewing">
        Option 2: Table Viewing
      </Link>
     
    </div>
  )
}

export default Choices
