import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    setStatus: (state, action) => {
      state.find((task) => task._id === action.payload._id).status =
        action.payload.status;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
  },
});

export const selectTasks = (state) => state.tasks;

export const { createTask, setStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
