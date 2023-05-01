export const setTasksLocalStorage = tasks =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

export const getTasksLoaclStorage = () =>
    JSON.parse(localStorage.getItem("tasks")) || [];