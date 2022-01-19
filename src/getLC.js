export const setTasksLocalStorage = (tasksContainer) => {
  console.log('ORIGINAL FUNCTION');
  localStorage.setItem('tasksContainer', JSON.stringify(tasksContainer));
};
