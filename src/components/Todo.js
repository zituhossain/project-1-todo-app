import React from "react";

import style from './style/todo.module.css'

const Todo = (props) => {
  const { title, description } = props.todo;
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <button className={style.btn}><i class="fa fa-trash fa-2x fa-fw"></i></button>
      </div>
    </article>
  );
};

export default Todo;
