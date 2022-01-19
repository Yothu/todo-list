/**
 * @jest-environment jsdom
 */

import { addTask, deleteSelectedTask } from '../src/crud-module';
import setTasksLocalStorage from '../src/getLC';

/* eslint-disable-next-line global-require */
jest.mock('../src/getLC', () => require('../__mocks__/getLC'));

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
