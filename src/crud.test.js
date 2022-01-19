import { addTask, deleteSelectedTask } from './crud-module';
//add and remove functions

describe('Add task function tests', () => {
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