import clsx from "clsx";
import { useState } from "react";
import css from "./Forms.module.css";

const FormAddNewTask = (props) => {
  const { addNewTask, setFormVisible } = props;
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const hanleChange = (e) => {
    const filedName = e.target.name;
    setValues({ ...values, [filedName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      addNewTask(values.title, values.description);
    } else {
      alert("The title field is required!");
    }
    setFormVisible(false);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        id="taskTitle"
        name="title"
        type="text"
        placeholder="Enter task title"
        value={values.title}
        onChange={hanleChange}
      />
      <textarea
        className={clsx(css.input, css.textarea)}
        id="taskDescription"
        name="description"
        placeholder="Enter task description"
        value={values.description}
        onChange={hanleChange}
      />
      <button className={css.submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormAddNewTask;
