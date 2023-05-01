export const getExampleTasks = async () => {
    const response = await fetch("/todos-list-react/exampleTasks.json");

    if(response.ok) {
        return await response.json();
    } else {
        new Error(response.Error);
    };
};