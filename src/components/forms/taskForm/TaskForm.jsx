import { useState } from "react";
import cl from "./TaskFor.module.scss";
import { taskFormDefaultValues } from "../taskFormDefaultValues";

const TaskForm = ({ id, handleFormSubmit, formValues }) => {
  const [formState, setFormState] = useState(
    formValues || taskFormDefaultValues
  );

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formState);
    setFormState(taskFormDefaultValues);
  };

  return (
    <form id={id} className={cl.form} onSubmit={handleSubmit}>
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
    </form>
  );
};

export default TaskForm;
