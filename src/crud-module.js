console.log('CRUD-MODULE START');
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

  for (const box of checkboxes) {
    if (box.checked) {
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i] == box.parentElement) {
          tasks[i].remove();
          deleteTask(i);
          break;
        }
      }
    }
  }
}

export const deleteTask = (index) => {
  
}

console.log('CRUD-MODULE END');
