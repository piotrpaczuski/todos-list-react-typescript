export const getExampleTasks = async (): Promise<any> => {
  const response: Response = await fetch("/todos-list-react/exampleTasks.json");

  if (response.ok) {
    return await response.json();
  }
};
