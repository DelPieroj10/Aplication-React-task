import React from 'react';
import '../Style-sheet/Task.css';
import { FcDeleteRow } from "react-icons/fc";

function Task({ id, text, fulfilled, completeTask, deleteTask }) {
  
  return (
    <div className={fulfilled ? 'task-container fulfilled' : 'task-container'}>
      <div 
        className='task-text'
        onClick={() => completeTask(id)}>
        {text}  
      </div>
      <div 
        className='container-task-icons'
        onClick={() => deleteTask(id)}>
        <FcDeleteRow className='task-icon' />
      </div>
    </div>
  );
};


export default Task;