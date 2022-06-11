import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import {db} from '../firebase'
const Add = () => {
    const [task, setTitle] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (task !== '') {
          await addDoc(collection(db, 'todos'), {
            task,
            completed: false,
          });
          setTitle('');
        } else {
            alert('Task can not be empty!')
        }
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Add