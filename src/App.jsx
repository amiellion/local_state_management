import { useState, useId, useRef } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store/counter/slice';
import { v4 as uuidv4 } from "uuid";
import DisplayTodo from './components/DisplayTodos';
import TodoComponent from './components/TodoComponent';


function App() {
    const dispatch = useDispatch();
    const { value } = useSelector(state => state.counter);
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
            const state2  = [...state]; => state becomes [1, 2]
        */
        setTodos(state => {
            const state2 = [...state];
            state2.push({
                todo: 'Todo Sample 3',
                id: uuidv4(),
            });

            /*
             state2 final values = [
                 {
                    todo: 'Todo Sample 1',
                    id: 'todo1',
                },
                {
                    todo: 'Todo Sample 2',
                    id: 'todo1',
                },
                {
                    todo: 'Todo Sample 3',
                    id: 'todo3',
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
            const filteredArray = state.filter((item, index) => item.id !== id);
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
                <label htmlFor='fname'>todo:</label>
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
