export const setTasksLocalStorage = (tasksContainer) => {
  console.log('getlc AAAAAAAA');
  localStorage.setItem('tasksContainer', JSON.stringify(tasksContainer));
};
