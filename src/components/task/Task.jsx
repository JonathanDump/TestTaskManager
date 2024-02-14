import { useDispatch } from "react-redux";
import cl from "./Task.module.scss";
import { deleteTask, editTask, setStatus } from "../../redux/slices/tasks";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../forms/taskForm/TaskForm";
import { getValidClassNames } from "../../helpers/getValidClassNames";

const Task = (props) => {
  const { name, description, createdBy, deadline, status, _id } = props;

  const [isEdit, setIsEdit] = useState(false);

  const { taskId } = useParams();
  const navigate = useNavigate();

  const statusSelectRef = useRef();
  const dispatch = useDispatch();

  const handleInfoClick = () => {
    console.log("itemId", taskId);
    if (taskId) {
      console.log("return");

      return;
    }

    console.log("navogate");
    navigate(`/${_id}`);
  };

  const handleStatusChange = () => {
    dispatch(setStatus({ _id, status: statusSelectRef.current.value }));
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteTask({ _id }));
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSaveClick = (formState) => {
    dispatch(editTask(formState));
    toggleEdit();
  };

  const getActions = () => {
    if (isEdit) {
      return (
        <>
          <button className={cl.action} onClick={toggleEdit}>
            Cancel
          </button>
          <button form="editTask" className={cl.action}>
            Save
          </button>
        </>
      );
    }

    return (
      <>
        <button className={cl.action} onClick={toggleEdit}>
          Edit
        </button>
        <button className={cl.action} onClick={handleDeleteClick}>
          Delete
        </button>
      </>
    );
  };

  const getMain = () => {
    if (isEdit) {
      return (
        <TaskForm
          id="editTask"
          formValues={props}
          handleFormSubmit={handleSaveClick}
        />
      );
    }

    return (
      <>
        <div
          className={cl.info}
          onClick={handleInfoClick}
          style={{ cursor: taskId ? "default" : "pointer" }}
        >
          <div className={cl.name}>{name}</div>
          <div className={cl.description}>{description}</div>
        </div>

        <div className={cl.meta}>
          <div className={cl.wrapper}>
            <div className={cl.title}>Created By:</div>
            <div className={cl.value}>{createdBy}</div>
          </div>

          {deadline && (
            <div className={cl.wrapper}>
              <div className={cl.title}>Deadline:</div>
              <div className={cl.value}>{deadline}</div>
            </div>
          )}

          <div className={cl.wrapper}>
            <div className={cl.title}>Status:</div>
            <select
              name="status"
              id="status"
              ref={statusSelectRef}
              value={status}
              onChange={handleStatusChange}
            >
              <option value="readyToGo">Ready to go</option>
              <option value="taken">Taken</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={getValidClassNames(cl.task, isEdit && cl.isEdit)}>
      <div className={cl.actions}>{getActions()}</div>
      <div className={cl.main}>{getMain()}</div>
    </div>
  );
};

export default Task;
