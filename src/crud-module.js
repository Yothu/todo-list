export class Task {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const setTasksLocalStorage = (tasksContainer) => {
  localStorage.setItem('tasksContainer', JSON.stringify(tasksContainer));
};

export const getTasksLocalStorage = () => {
  if (localStorage.getItem('tasksContainer') != null) {
    return JSON.parse(localStorage.getItem('tasksContainer'));
  }
  return [];
};

export const addTask = (description, tasksContainer) => {
  const newTask = new Task(description, false, tasksContainer.length);
  tasksContainer.push(newTask);
  // setTasksLocalStorage(tasksContainer);
  return newTask;
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

export const deleteSelectedTask = (taskToRemove, tasksContainer) => {
  const tasksCo = taskToRemove.parentElement;
  const tasksList = tasksCo.children;

  for (let i = 0; i < tasksList.length; i += 1) {
    if (tasksList[i] === taskToRemove) {
      tasksContainer = deleteTask(i, tasksContainer);
      tasksList[i].remove();
      break;
    }
  }
  return tasksContainer;
};

export const modifyTask = (taskInput, tasksContainer) => {
  const taskChanged = taskInput.parentElement;
  const taskList = taskChanged.parentElement.children;

  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i] === taskChanged) {
      tasksContainer[i].description = taskInput.value;
    }
  }
  return tasksContainer;
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
