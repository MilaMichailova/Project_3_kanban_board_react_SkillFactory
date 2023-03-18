import css from "./Main.module.css";
import { Routes, Route } from "react-router-dom";
import Board from "../board/Board";
import TaskDetail from "../task-detail/TaskDetail";

const Main = (props) => {
  const { tasks, setTasks } = props;
  return (
    <main className={css.main}>
      <Routes>
        <Route path="/" element={<Board tasks={tasks} setTasks={setTasks} />} />
        <Route path="/tasks/:taskId" element={<TaskDetail {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;
