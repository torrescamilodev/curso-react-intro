import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);
    
    return (
        <input
         placeholder="nuevo TODO"
         className='TodoSearch'
         value={searchValue}
         onChange={(event) => {
            // console.log('Escribiste en el TODO search');
            // console.log(event);
            // console.log(event.target);
            setSearchValue(event.target.value);
         }}
        />
    )
}

export { TodoSearch };