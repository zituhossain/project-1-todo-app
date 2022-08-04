import React from "react";

const Todo = (props) => {
  const { title, description } = props.todo;
  return (
    <article>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <button><i class="fa fa-trash fa-2x fa-fw"></i></button>
      </div>
    </article>
  );
};

export default Todo;
