import React from 'react';
import TodoComponent from './TodoComponent';


/*

    .map => transforms array into something new
    array always returns somthing
    item => access array element
    index => access index of element in relation to the array

    mapArray(callbackFunction(item, index) => {
        return **value**
    })
    mayArray.map((item, index) => {
        return
    })
*/

const DisplayTodo = ({ todos, onClickRemove }) => {
    return todos.map((item, index) => <TodoComponent todo={item.todo} id={item.id} onClickRemove={onClickRemove}/>);
};

export default DisplayTodo;
