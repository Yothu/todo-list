import { deleteTask } from './status-module';

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
  setTasksLocalStorage(tasksContainer);
  return newTask;
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
