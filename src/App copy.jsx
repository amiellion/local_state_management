import { useState, useId, useRef } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store/counter/slice';
import { v4 as uuidv4 } from "uuid";

const TodoComponent = ({ todo, id, onClickRemove }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: 5,
        }}>
            <p>Todo: {todo} </p>
            <p>ID: {id} </p>
            <button>add</button>
            <button onClick={() => onClickRemove(id)}>remove</button>
            <button>edit</button>
        </div>
    );
};

const TodoList = ({ }) => {

};

function App() {

    const inputRef = useRef();
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([
        {
            todo: 'test',
            id: useId()
        },
        {
            todo: 'test',
            id: useId()
        }
    ]);

    const addTodo = (todo) => {
        setTodos(state => {
            const state2 = [...state];
            state.push({
                todo,
                id: uuidv4()
            });
            return state2;
        });
    };
    const removeTodo = (id) => {
        setTodos(state => {
            const filtered = state.filter(item => {
                console.log({ item });
                return false;
            });

            return filtered;
        });
    };
    const dispatch = useDispatch();
    const { value } = useSelector(state => state.counter);


    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>
                    count is {value}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>

            <div style={{
                border: '1px solid red',
                borderRadius: 5,
            }}>
                <label htmlFor='fname'>todo:</label>
                <input ref={inputRef} type="text" id="fname" name="fname" />
                <button onClick={() => addTodo(inputRef.current.value)}>
                    Add Todo
                </button>
            </div>

            {todos.map(item => {
                return <TodoComponent
                    todo={item?.todo}
                    id={item?.id}
                    key={item?.id}
                    onClickRemove={removeTodo}
                />;
            })}
        </div>
    );
}

export default App;
