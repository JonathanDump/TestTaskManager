import FormCreateTask from "/src/components/forms/formCreateTask/FormCreateTask";
import cl from "./IndexRoute.module.scss";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/slices/tasks";
import Task from "../../components/task/Task";

function IndexRoute() {
  const tasks = useSelector(selectTasks);
  console.log(tasks);

  return (
    <div className={cl.indexRoute}>
      <FormCreateTask />
      {tasks.map((task) => (
        <Task {...task} key={task._id} />
      ))}
    </div>
  );
}

export default IndexRoute;
