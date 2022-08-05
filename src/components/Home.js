import React, { useState } from 'react'

import Todos from './Todos';
import style from './style/home.module.css'
import NewTodo from './NewTodo';

const home = () => {
  const [todos,setTodos] = useState([]);

  return (
    <div className={style.container}>
      <h1 style={{color: '#fff'}}>Todo App</h1>
      <NewTodo />
        <Todos todos={todos} />
    </div>
  )
}

export default home