import css from "./TaskDetail.module.css";
import { useParams } from "react-router-dom";
import Close from "../../assets/img/close.png";
import { Link } from "react-router-dom";

const TaskDetail = (props) => {
  const params = useParams();
  const { taskId } = params;
  const { tasks } = props;
  const task = tasks.find((task) => task.id === taskId);

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h2 className={css.title}>{task.title}</h2>
        <Link to={"/"}>
          <button className={css.buttonClose}>
            <img src={Close} alt="close task detail" />
          </button>
        </Link>
      </div>
      <p className={css.taskDescription}>
        Description: {task.description || "This task has no description"}
      </p>
    </div>
  );
};

export default TaskDetail;
