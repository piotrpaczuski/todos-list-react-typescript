import { Task } from "./tasksTypes";

const nameOfKey = "tasks";

export const setTasksLocalStorage = (tasks: Task[]) =>
  localStorage.setItem(nameOfKey, JSON.stringify(tasks));

export const getTasksLocalStorage = (): Task[] =>
  JSON.parse(localStorage.getItem(nameOfKey)?.toString() ?? "") || [];
