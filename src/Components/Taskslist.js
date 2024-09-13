import React from 'react';
import FormTask from './FormTask';
import '../Style-sheet/Taskslist.css';
import { useState } from 'react';
import Task from './Tasks';



function TasksList() {

    const [tasks, setTasks] = useState([]);

    const AddTask = task => {
      /*console.log("Added Task");
      console.log(task);*/ // This allows us to check that the variable "AddTask its works doing a print in the console."

      // console.log('Before: ' + task);
      if (task.text.trim()) {
        task.text = task.text.trim();
        const updatedTasks = [task, ...tasks];
        setTasks(updatedTasks);
      } 
    };

    const deleteTask = id => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    };

    const completeTask = id => {
      const updatedTasks = tasks.map(task => {
        if (task.id === id) {
          task.fulfilled = !task.fulfilled;
        }
        return task;
      });
      setTasks(updatedTasks);
    };

    return (
        <>
            <FormTask onSubmit={AddTask}/>
            <div className='list-tasks-container'>
              {
                tasks.map((task) =>
                  <Task
                    key={task.id} 
                    id={task.id} 
                    text={task.text}
                    fulfilled={task.fulfilled}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                  />
                )
              }
            </div>
        </>
    );
};

export default TasksList;