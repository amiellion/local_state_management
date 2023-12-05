//@dependencies
import React from 'react';

//components
import TodoComponent from './TodoComponent';


/*

    .map => transforms array into something new
    array always returns somthing
    item => access array element
    index => access index of element in relation to the array

    mapArray(callbackFunction(item, index) => {
        return **value**
    })
    myArray.map((item, index) => {
        return
    })
*/

const DisplayTodo = ({ todos, onClickRemove }) => {
    return todos.map((item, index) => (
        <TodoComponent
            todo={item.todo}
            id={item.id}
            onClickRemove={onClickRemove}
            key={`todos-${index}`} // Required when rendering array of components || refer to: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
        />
    ));
};

export default DisplayTodo;
