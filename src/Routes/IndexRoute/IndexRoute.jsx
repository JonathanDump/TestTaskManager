import FormCreateTask from "/src/components/forms/formCreateTask/FormCreateTask";
import cl from "./IndexRoute.module.scss";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/slices/tasks";
import Task from "../../components/task/Task";
import Search from "../../components/search/Search";
import { useEffect, useState } from "react";

function IndexRoute() {
  const allTasks = useSelector(selectTasks);

  const [tasks, setTasks] = useState(allTasks);

  useEffect(() => {
    setTasks(allTasks);
  }, [allTasks]);

  return (
    <main className={cl.indexRoute}>
      <Search tasks={allTasks} setTasks={setTasks} />
      <FormCreateTask />
      {tasks.map((task) => (
        <Task {...task} key={task._id} />
      ))}
    </main>
  );
}

export default IndexRoute;
