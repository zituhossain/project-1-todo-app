import React, { useState } from "react";

import style from "./style/newtodo.module.css";

const NewTodo = () => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (evt) => {
    const name = evt.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: evt.target.value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formField}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className={style.formField}>
          <label htmlFor="desc">Description: </label>
          <textarea
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add todo</button>
      </form>
    </>
  );
};

export default NewTodo;
