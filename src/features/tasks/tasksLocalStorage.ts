import { TasksTypes } from "./tasksTypes";

const nameOfKey: string = "tasks";

export const setTasksLocalStorage = (tasks: TasksTypes[]) =>
  localStorage.setItem(nameOfKey, JSON.stringify(tasks));

export const getTasksLocalStorage = (): TasksTypes[] =>
  JSON.parse(localStorage.getItem(nameOfKey) as string) || [];
