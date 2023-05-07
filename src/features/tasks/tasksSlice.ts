import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasksLocalStorage } from "./tasksLocalStorage";
import { TasksTypes } from "./tasksTypes";
import { RootState } from "../../store";

interface InitialStateTypes {
  tasks: TasksTypes[];
  hideDone: boolean;
  done: boolean;
  isLoading: boolean;
}

const initialState: InitialStateTypes = {
  tasks: getTasksLocalStorage(),
  hideDone: false,
  done: false,
  isLoading: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: ({ tasks }, { payload: task }: PayloadAction<TasksTypes>) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }: PayloadAction<string>) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTasks: (state, { payload: taskId }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(({ id }) => id !== taskId);
    },
    setAllDone: ({ tasks }) => {
      tasks.map(({}, index) => {
        tasks[index].done = true;
      });
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }: PayloadAction<TasksTypes[]>) => {
      state.tasks = tasks;
    },
    setLoading: (state, { payload: loading }: PayloadAction<boolean>) => {
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

export const selectHideDone = (state: RootState): boolean =>
  state.tasks.hideDone;
export const selectTasks = (state: RootState): TasksTypes[] =>
  state.tasks.tasks;
export const selectIsLoading = (state: RootState): boolean =>
  state.tasks.isLoading;

export const selectIsEveryTaskDone = (state: RootState) => {
  return selectTasks(state).every(({ done }) => done);
};

export const getTaskById = (state: RootState, taskId: string) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state: RootState, query: string) => {
  if (!query || query === "") {
    return selectTasks(state);
  }
  return selectTasks(state).filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
