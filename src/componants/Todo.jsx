import React, { useState } from 'react'
import './Todo_style.css';

const Todo = () => {

  const [textValue, setText] = useState('')

  const takeText = (e) => {
    setText(e.target.value)
  }

  const [todoList, setList] = useState([])

  const addList = (e) => {
    if (textValue == '') {
      alert("Enter Something Please...")
    }
    else {
      setList([...todoList, textValue]);
      e.preventDefault();
    }
  }

  const removeTodo = (index) => {
    const removeItem = [...todoList];
    removeItem.splice(index,1);
    setList(removeItem);

  }

  console.log(todoList);

  return (
    <div className='main'>
      <div className='todo-maindiv'>
        <div className='todo-formDiv'>
          <form action="">
            <input value={textValue} onChange={takeText} type="text" placeholder=' Type here...' />

            <button onClick={addList} type='submit'>Add Todo</button>
          </form>
        </div>

        <div className='result-parent-div'>
          {
            todoList.map((todo, index) => (
              <div className='result-child-div' key={index}>
                <span>{todo}</span>
                <button onClick={()=>removeTodo(index)}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Todo