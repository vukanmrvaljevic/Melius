import React from "react"
import "./progress_bar.css"
import Form from "../../components/Form"
import TodoList from "../../components/TodoList"
import UploadImage from "../../components/UploadImage"

export default function progress_bar() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Form />
      <TodoList />
      <UploadImage />
    </div>
  )
}
