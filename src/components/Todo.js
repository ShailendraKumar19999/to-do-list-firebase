import React, { useState } from 'react';

function Todo({ id,todo, toggleComplete, handleEdit, handleDelete }) {
  const [newTitle, setNewTitle] = useState(todo.task);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.task);
    } else {
      todo.task = '';
      setNewTitle(e.target.value);
    }
  };
  
  return (
    <div className="todo input">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <h2>
          {id + 1}. {'\u00A0'}
        </h2>
        <div>
          <input
            style={{ textDecoration: todo.completed && 'line-through' }}
            value={todo.task === '' ? newTitle : todo.task}
            className="list"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="btn-div">
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          Completed
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          Save
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
