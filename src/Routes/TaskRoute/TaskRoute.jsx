import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/slices/tasks";
import { useParams } from "react-router-dom";
import Task from "../../components/task/Task";

const TaskRoute = () => {
  const { taskId } = useParams();

  const task = useSelector(selectTasks).find((task) => task._id === taskId);

  if (!task) {
    throw new Error("Something went wrong or task doesn't exist");
  }

  return (
    <main>
      <Task {...task} />
    </main>
  );
};

export default TaskRoute;
