import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title)
      setTitle('')
      setMessage('')
    } else {
      setMessage('Please add a task')
    }
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" value={title} onChange={handleChange} placeholder="Add Todo..." className="input-text" />
        <button type="submit" className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  )
}

export default InputTodo;