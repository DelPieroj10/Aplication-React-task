// import React, { useState } from 'react';
import '../Style-sheet/FormTask.css';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './localStorage';

function FormTask(props) {

    //const [input, setInput] = useState('')
     
    const [input, setInput] = useLocalStorage('input', '') 
    //const { setItem } = setLocalStorage('input'); // This constant is used to the momento when we import from useLocalStorage as setLocalStorage to can see the key and value in DevTools.
    
    const handleChange = e => {
        setInput(e.target.value);
       // console.log("Writing..."); /*This is used to do a test in console
    };

    const handleShipping = e => {
        e.preventDefault();
        // console.log("Sending form..."); /*This is used to do a test in console

        const newTask = {
            id: uuidv4(),   //This hook allows us to work with a unic id where every task we include in the box will has one.
            // text: 'Hey there' /* Test of text in console
            text: input,
            fulfilled: false,
        };
        //console.log(newTask); /* This print is user to verify the import of "uuid".
        
        props.onSubmit(newTask);
    };

    return (
        <form 
            className='form-task'
            onSubmit={handleShipping}>
            <input 
                className='input-task'
                type='text'
                placeholder='Write a task'
                name='text'
                onChange={handleChange}
                value={input} 
            />
            <button className='button-task'
            onClick={() => ('')}>
                Add Task
            </button>
        </form>
    )
};

export default FormTask;