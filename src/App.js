import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import Add from './components/Add';
import Title from './components/Title';
import Todo from './components/Todo';
import {db} from './firebase'

function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = []
      querySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArray);
    })
    return ()=> unsub()
    
  }, [])
  
  const handleEdit = async (todo, task) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      task: task,
    });
  };

 

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <Add />
      </div>
      <div className="todo_container">
        {todos.map((todo,id) => (
          <Todo
            id={id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
