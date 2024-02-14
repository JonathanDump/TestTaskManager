import { useState } from "react";
import cl from "./Search.module.scss";

const Search = ({ tasks, setTasks }) => {
  const [formState, setFormState] = useState({ filter: "name", input: "" });
  let timer;

  const handleChange = (e) => {
    setFormState((prev) => {
      const updated = { ...prev, [e.target.name]: e.target.value };

      clearTimeout(timer);

      timer = setTimeout(() => {
        console.log("searching");
        searchTasks({ tasks, setTasks, formState: updated });
      }, 500);

      return updated;
    });
  };

  return (
    <div className={cl.search}>
      <form action="">
        <div className={cl.inputContainer}>
          <label htmlFor="filter">Search by</label>
          <select
            name="filter"
            id="filter"
            value={formState.filter}
            onChange={handleChange}
          >
            <option value="name">Name</option>
            <option value="createdBy">Created By</option>
            <option value="deadline">Deadline</option>
            <option value="status">Status</option>
          </select>
        </div>

        <input
          type="text"
          name="input"
          value={formState.input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;

function searchTasks({ tasks, setTasks, formState }) {
  const { input, filter } = formState;

  setTasks(
    tasks.filter((task) =>
      task[filter].toLowerCase().includes(input.toLowerCase())
    )
  );
}
