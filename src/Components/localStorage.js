import { useState } from 'react';

/*export const setLocalStorage = (value) => {
    const setItem = (value) => {
        try {
            window.localStorage.setItem('input', value);
        } catch (error) {
            console.error(error);
        }
    };

    return { setItem };
};
// This function had been used for the principal intention to check that the localStorage is worth into localhost:3000. Now, the next function is which allows us to make that the value keep in task list.  */

export function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        };

    });

    const setValue = value => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        };
    };

    return [storedValue, setValue];
};






