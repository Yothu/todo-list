const setTasksLocalStorage = (tasksContainer) => {
  localStorage.setItem('tasksContainer', JSON.stringify(tasksContainer));
  console.log('getLocalStorage', JSON.parse(localStorage.getItem('tasksContainer')));
};

export default setTasksLocalStorage;
