import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    },
    setStatus: (state, action) => {
      state.find((task) => task._id === action.payload._id).status =
        action.payload.status;
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    },
    deleteTask: (state, action) => {
      state = state.filter((task) => task._id !== action.payload._id);
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    },

    editTask: (state, action) => {
      const updatedState = state.map((task) => {
        if (task._id === action.payload._id) {
          return action.payload;
        }
        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(updatedState));

      return updatedState;
    },
  },
});

export const selectTasks = (state) => state.tasks;

export const { createTask, setStatus, deleteTask, editTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
