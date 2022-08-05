import React, { useState } from "react";

import style from "./style/newtodo.module.css";

const NewTodo = () => {
  
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const { title, desc } = todo;
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formField}>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" value={title} />
        </div>
        <div className={style.formField}>
          <label htmlFor="desc">Description: </label>
          <textarea type="text" id="desc" name="desc" value={desc} />
        </div>
        <button type="submit">Add todo</button>
      </form>
    </>
  );
};

export default NewTodo;
