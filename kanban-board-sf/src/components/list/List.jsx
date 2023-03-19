import css from "./List.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormAddNewTask from "../forms/FormAddNewTask";
import { LIST_TYPES } from "../../config";
import uniqid from "uniqid";

const List = (props) => {
  const { title, type, tasks, addNewTask, setTasks } = props;
  const [isFormVisible, setFormVisible] = useState(false);

  const handleClick = () => {
    setFormVisible(!isFormVisible);
  };

  const getCurrentListTasks = (listType) =>
    tasks.filter((task) => task.status === listType);

  const getPreviousStateTasks = (listType) => {
    switch (listType) {
      case LIST_TYPES.READY:
        return tasks.filter((task) => task.status === LIST_TYPES.BACKLOG);
      case LIST_TYPES.IN_PROGRESS:
        return tasks.filter((task) => task.status === LIST_TYPES.READY);
      case LIST_TYPES.FINISHED:
        return tasks.filter((task) => task.status === LIST_TYPES.IN_PROGRESS);
      default:
        return [];
    }
  };

  const onTaskSelected = (event) => {
    const taskId = event.target.value;
    const findedTask = tasks.find((task) => task.id === taskId);
    findedTask.status = type;
    setFormVisible();
    setTasks([...tasks]);
  };

  return (
    <div className={css.list}>
      <h2 className={css.listTitle}>{title}</h2>
      <div className={css.listWrapper}>
        {getCurrentListTasks(type).map((task) => {
          return (
            <Link
              key={`${task.id}-link`}
              to={`/tasks/${task.id}`}
              className={css.taskLink}
            >
              <div key={task.id} className={css.task}>
                {task.title}
              </div>
            </Link>
          );
        })}
        {type === LIST_TYPES.BACKLOG && !isFormVisible && (
          <button className={css.addButton} onClick={handleClick}>
            + Add card
          </button>
        )}

        {type !== LIST_TYPES.BACKLOG && !isFormVisible && (
          <button
            disabled={!getPreviousStateTasks(type).length}
            className={css.addButton}
            onClick={handleClick}
          >
            + Add card
          </button>
        )}

        {type === LIST_TYPES.BACKLOG && isFormVisible && (
          <FormAddNewTask
            addNewTask={addNewTask}
            setFormVisible={setFormVisible}
          />
        )}
        {type !== LIST_TYPES.BACKLOG && isFormVisible && (
          <select onChange={onTaskSelected} className={css.selectTask}>
            <option
              key={uniqid()}
              value="optionsState"
              className={css.optionTask}
            >
              please select a task here
            </option>
            {getPreviousStateTasks(type).map((task) => {
              return (
                <option key={task.id} value={task.id}>
                  {task.title}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </div>
  );
};

export default List;
