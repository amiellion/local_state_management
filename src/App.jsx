//@dependencies
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from "uuid";

//components
import DisplayTodo from './components/DisplayTodos';

//styles
import './App.css';

function App() {

    const myRef = useRef();
    const [todos, setTodos] = useState([
        {
            todo: 'Todo Sample 1',
            id: 'todo1',
        },
        {
            todo: 'Todo Sample 2',
            id: 'todo1',
        }
    ]);


    /*
     requirements: 
     - display todo component - ok
     - display todo from data - ok
     - add todo - ok
     - remove todo - ok
    */

    /*
        Template Literals === concatenation
    */

    const onClickAdd = () => {
        /*
            const state  = [1, 2];
            const state2  = [...state]; => state2 becomes [1, 2]
        */
        setTodos(state => {
            const state2 = [...state];
            state2.push({
                todo: myRef?.current?.value,
                id: uuidv4(),
            });

            /*
            ** __id__ -> randomly generated id
             state2 final values = [
                 {
                    todo: 'Todo Sample 1',
                    id: __id__,
                },
                {
                    todo: 'Todo Sample 2',
                    id: __id__,
                },
                {
                    todo: myRef?.current?.value, -> whatever the value of the input field is
                    id: __id__,
                }
             ];
            */
            return state2;
        });
    };

    const onClickRemove = (id) => {
        /*
            const state  = [1, 2];
            const state2  = [...state]; => state becomes [1, 2]
        */
        setTodos(state => {
            /*
                filter = loops through an array || used for filtering an array
            */
            const filteredArray = state.filter((item) => item.id !== id);
            return filteredArray;
        });
    };

    return (
        <div className="App">
            <h1>Todo List</h1>

            <div style={{
                border: '1px solid red',
                borderRadius: 5,
            }}>
                <label htmlFor='fname'> &nbsp;&nbsp;&nbsp;todo: </label>
                <input ref={myRef} type="text" id="fname" name="fnamesssss" />
                <button onClick={onClickAdd}>
                    Add Todo
                </button>
            </div>

            <DisplayTodo todos={todos} onClickRemove={onClickRemove} />
        </div>
    );
}

export default App;
