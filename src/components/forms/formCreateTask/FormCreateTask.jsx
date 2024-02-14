import { useState } from "react";
import cl from "./FormCreateTask.module.scss";
import { useDispatch } from "react-redux";
import { createTask } from "../../../redux/slices/tasks";
import TaskForm from "../taskForm/TaskForm";

const CreateTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleCreateButtonClick = () => {
    setIsOpen(true);
  };

  const handleFormSubmit = (formState) => {
    dispatch(createTask({ ...formState, _id: crypto.randomUUID() }));

    setIsOpen(false);
  };

  const handleCancelClick = () => setIsOpen(false);

  return (
    <div className={cl.createTask}>
      {!isOpen && (
        <button className={cl.createButton} onClick={handleCreateButtonClick}>
          Add Task
        </button>
      )}

      {isOpen && (
        <>
          <TaskForm id="createTask" handleFormSubmit={handleFormSubmit} />
          <div className={cl.buttons}>
            <button onClick={handleCancelClick}>Cancel</button>
            <button form="createTask">Create task</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateTask;
