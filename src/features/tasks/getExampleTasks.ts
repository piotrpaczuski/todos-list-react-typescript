import { TasksTypes } from "./tasksTypes";

export const getExampleTasks = async (): Promise<TasksTypes[]> => {
  const response = await fetch(
    "/todos-list-react-typescript/exampleTasks.json"
  );

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Błąd sieci!");
  }
};
