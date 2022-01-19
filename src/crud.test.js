import { addTask, deleteSelectedTask } from './crud-module';
//add and remove functions

describe('Add task function tests', () => {
  test('added one new task to empty task container', () => {
    //ARRANGE
    const task = { description: 'abc' };
    const tasksContainer = [];

    //ACT
    addTask(task.description, tasksContainer);

    //ASSERT
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
});

describe('Delete task function tests', () => {
  
});

// test('delete task from list', () => {
//   const 
//   const tasksContainer = [];
//   const result = deleteSelectedTask(taskToRemove, tasksContainer);
// });