export const modifyStatus = (taskChanged, tasksContainer) => {
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

export const deleteTask = (index, tCont) => {
  let change = false;
  for (let i = 0; i < tCont.length; i += 1) {
    if (change) {
      tCont[i].index -= 1;
    } else if (i === index) {
      tCont = tCont.filter((task) => task.index !== index);
      change = true;
      i -= 1;
    }
  }
  return tCont;
};

export const deleteCompletedTasks = (checkboxes, tasksContainer) => {
  const tasksInnerContainer = document.querySelector('.task-inner-container');
  const tasks = tasksInnerContainer.children;
  let tCont = tasksContainer;

  checkboxes.forEach((box) => {
    if (box.checked) {
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i] === box.parentElement) {
          tCont = deleteTask(i, tCont);
          tasks[i].remove();
          break;
        }
      }
    }
  });
  return tCont;
};
