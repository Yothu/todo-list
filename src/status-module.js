const modifyStatus = (taskChanged, tasksContainer) => {
  const tc = tasksContainer;
  const taskList = taskChanged.parentElement.children;

  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i] === taskChanged) {
      if (tc[i].completed === true) {
        tc[i].completed = false;
        break;
      } else {
        tc[i].completed = true;
        break;
      }
    }
  }
  return tasksContainer;
};

export default modifyStatus;