import {Task, tasksContainer, createTaskHTML} from './index';

export const setTasksLocalStorage = (tasksContainer) => {
  localStorage.setItem('tasksContainer', JSON.stringify(tasksContainer));
}

export const getTasksLocalStorage = () => {
  return JSON.parse(localStorage.getItem('tasksContainer'));
}

export const displaySingleTask = (task) => {
  createTaskHTML(task.description, task.completed);
}

export const addTask = (description) => {
  const newTask = new Task(description, false, tasksContainer.length);
  tasksContainer.push(newTask);
  setTasksLocalStorage(tasksContainer);
  displaySingleTask(newTask);
}

export const deleteCompletedTasks = (checkboxes) => {
  const tasksInnerContainer = document.querySelector('.task-inner-container');
  const tasks = tasksInnerContainer.children;
  let tCont = tasksContainer;

  for (const box of checkboxes) {
    if (box.checked) {
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i] == box.parentElement) {
          tCont = deleteTask(i, tCont);
          tasks[i].remove();
          break;
        }
      }
    }
  }
  return tCont;
}

export const deleteTask = (index, tCont) => {
  let change = false;
  for (let i = 0; i < tCont.length; i += 1) {
    if (change) {
      tCont[i].index -= 1;
    } else {
      if (i == index) {
        tCont = tCont.filter((task) => task.index !== index);
        change = true;
        i -= 1;
      }
    }
  }
  return tCont;
}
