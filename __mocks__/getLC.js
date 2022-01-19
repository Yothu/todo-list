const setTasksLocalStorage = (task) => {
  const mockTasksContainer = [];
  mockTasksContainer.push(...task);
  const result = mockTasksContainer;
  return result;
};

export default { setTasksLocalStorage };