import { useDispatch } from "react-redux";
import cl from "./Task.module.scss";
import { setStatus } from "../../redux/slices/tasks";
import { useRef } from "react";

const Task = ({ name, description, createdBy, deadline, status, _id }) => {
  const statusSelectRef = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setStatus({ _id, status: statusSelectRef.current.value }));
  };

  return (
    <div className={cl.task}>
      <div className={cl.main}>
        <div className={cl.info}>
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
              <div className={cl.title}>Deadline</div>
              <div className={cl.value}>{deadline}</div>
            </div>
          )}

          <div className={cl.wrapper}>
            <div className={cl.title}>Status</div>
            <select
              name="status"
              id="status"
              ref={statusSelectRef}
              value={status}
              onChange={handleChange}
            >
              <option value="readyToGo">Ready to go</option>
              <option value="taken">Taken</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
      </div>
      <div className={cl.actions}>
        <button className={cl.delete}>Delete</button>
        <button className={cl.edit}>Edit</button>
      </div>
    </div>
  );
};

export default Task;
