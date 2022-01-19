export const setTasksLocalStorage = (tasksContainer) => {
  localStorage.setItem('tasksContainer', JSON.stringify(tasksContainer));
};
