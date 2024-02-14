import { useState } from "react";
import cl from "./FormCreateTask.module.scss";
import { useDispatch } from "react-redux";
import { createTask } from "../../../redux/slices/tasks";

const formStateDefaultValues = {
  name: "",
  description: "",
  createdBy: "",
  deadline: "",
  status: "readyToGo",
};

const FormCreateTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formState, setFormState] = useState(formStateDefaultValues);

  const dispatch = useDispatch();

  const handleCreateButtonClick = () => {
    setIsOpen(true);
  };

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ ...formState, _id: crypto.randomUUID() }));

    setIsOpen(false);
    setFormState(formStateDefaultValues);
  };

  return (
    <div className={cl.formCreateTask}>
      {!isOpen && (
        <button className={cl.createButton} onClick={handleCreateButtonClick}>
          Add Task
        </button>
      )}
      {isOpen && (
        <form className={cl.form} onSubmit={handleFormSubmit}>
          <div className={cl.inputContainer}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              required={true}
              onChange={handleInputChange}
            />
          </div>

          <div className={cl.inputContainer}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formState.description}
              required={true}
              onChange={handleInputChange}
            />
          </div>

          <div className={cl.inputContainer}>
            <label htmlFor="createdBy">Created By</label>
            <input
              type="text"
              id="createdBy"
              name="createdBy"
              value={formState.createdBy}
              required={true}
              onChange={handleInputChange}
            />
          </div>

          <div className={cl.inputContainer}>
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formState.deadline}
              onChange={handleInputChange}
            />
          </div>

          <div className={cl.inputContainer}>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={formState.status}
              onChange={handleInputChange}
            >
              <option value="readyToGo">Ready to go</option>
              <option value="taken">Taken</option>
              <option value="done">Done</option>
            </select>
          </div>

          <button className={cl.formSubmitButton}>Create Task</button>
        </form>
      )}
    </div>
  );
};

export default FormCreateTask;
