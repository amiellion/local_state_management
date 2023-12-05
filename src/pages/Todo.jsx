//@dependencies
import { useRef, useContext } from 'react';

//components
import PageContainer from "../components/PageContainer"
import DisplayTodo from '../components/DisplayTodos';

//store
import { MainContext } from '../Provider/index';

function Todo() {

    const myRef = useRef();
    const { onClickAdd } = useContext(MainContext);
    return (
        <PageContainer>
            <h1>Todo List</h1>
            <p>Todo List useContext Implementation</p>

            <div style={{
                borderRadius: 5,
                margin: 25,
                display: "flex",
                alignItems: "center",
                gap: 15
            }}>
                <label htmlFor='todo'>todo:</label>
                <input ref={myRef} type="text" id="todo" name="todoInput" />
                <button onClick={() => onClickAdd(myRef.current?.value)}
                    style={{
                        backgroundColor: "white",
                        border: '1px solid #ccc'
                    }}>
                    Add Todo
                </button>
            </div>

            <DisplayTodo />
        </PageContainer>
    );
}

export default Todo;
