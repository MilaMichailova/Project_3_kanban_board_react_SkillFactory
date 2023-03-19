import css from "./Footer.module.css";
import { LIST_TYPES, LIST_COPY } from "../../config";

const Footer = (props) => {
  const { tasks } = props;

  const countTasksByStatus = (taskStatus) => {
    return tasks.filter((task) => task.status === taskStatus).length;
  };

  return (
    <footer className={css.footer}>
      <div className={css.counts}>
        <div key="infoTasks" className={css.count}>
          <div className={css.count}>
            Active tasks: {countTasksByStatus(LIST_TYPES.BACKLOG)}
          </div>
          <div className={css.count}>
            Finished tasks: {countTasksByStatus(LIST_TYPES.FINISHED)}
          </div>
        </div>
      </div>
      <div className="css.copy">Kanban board by Name, Year</div>
    </footer>
  );
};

export default Footer;
