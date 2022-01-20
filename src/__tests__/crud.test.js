/**
 * @jest-environment jsdom
*/

import { addTask, deleteSelectedTask } from '../crud-module';
import setTasksLocalStorage from '../setLS';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

jest.mock('../setLS');

describe('Add task function tests', () => {
  test('added one new task to empty task container', () => {
    // ARRANGE
    const task = { description: 'abc' };
    const tasksContainer = [];
    // ACT
    addTask(task.description, tasksContainer);
    // ASSERT
    expect(tasksContainer.length).toBe(1);
  });
  test('New task description inserted in task container is abc', () => {
    // ARRANGE
    const task = { description: 'abc' };
    const tasksContainer = [];
    // ACT
    const result = addTask(task.description, tasksContainer);
    // ASSERT
    expect(result.description).toBe('abc');
  });
  test('add new task using setTasksLocalStorage mock function', () => {
    // ARRANGE
    const task = [{ description: 'abc' }];
    let tasksContainer = [];
    // ACT
    tasksContainer = setTasksLocalStorage(task);
    // ASSERT
    expect(tasksContainer.length).toBe(1);
  });
});

describe('Delete task function tests', () => {
  test('length of taskContainer after deleting its only task, is ZERO', () => {
    // ARRANGE
    document.body.innerHTML = `<ul class='task-inner-container'>
    <li class='task'></li>
    </ul>`;
    const tasksContainer = [
      {
        description: 'abc',
        completed: false,
        index: 0,
      },
    ];
    const taskToRemove = document.querySelector('.task');
    // ACT
    const result = deleteSelectedTask(taskToRemove, tasksContainer);
    // ASSERT
    expect(result.length).toBe(0);
  });
});

global.localStorage = new LocalStorageMock();

// export { localStorage };