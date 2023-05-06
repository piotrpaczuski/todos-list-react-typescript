import { createSlice } from "@reduxjs/toolkit";
import { getTasksLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksLocalStorage(),
    hideDone: false,
    done: false,
    isLoading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTasks: (state, { payload: taskId }) => {
      state.tasks = state.tasks.filter(({ id }) => id !== taskId);
    },
    setAllDone: ({ tasks }) => {
      tasks.map(({}, index) => {
        tasks[index].done = true;
      });
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    setLoading: (state, { payload: loading }) => {
      state.isLoading = loading;
    },
  },
});
export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTasks,
  setAllDone,
  fetchExampleTasks,
  setTasks,
  setLoading,
} = tasksSlice.actions;

export const selectHideDone = ({ tasks }) => tasks.hideDone;
export const selectTasks = ({ tasks }) => tasks.tasks;
export const selectIsLoading = ({ tasks }) => tasks.isLoading;

export const selectIsEveryTaskDone = (state) => {
  return selectTasks(state).every(({ done }) => done);
};

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state, query) => {
  if (!query || query === "") {
    return selectTasks(state);
  }
  return selectTasks(state).filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
