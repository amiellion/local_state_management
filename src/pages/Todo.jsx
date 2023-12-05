//@dependencies
import { useRef } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';

//components
import DisplayTodo from '../components/DisplayTodos';
import PageContainer from '../components/PageContainer';
import { TODO_SLICE_ACTIONS } from '../store/todo/slice';

function Todo() {
    const myRef = useRef();
    const dispatch = useDispatch();

    const onClickAdd = () => {
        dispatch(TODO_SLICE_ACTIONS.addTodo({
            todo: myRef.current?.value,
            id: uuidv4()
        }))
    }

    return (
        <PageContainer>
            <h1>Todo List</h1>
            <p>Todo List Redux Implementation</p>

            <div style={{
                borderRadius: 5,
                margin: 25,
                display: "flex",
                alignItems: "center",
                gap: 15
            }}>
                <label htmlFor='todo'>todo:</label>
                <input ref={myRef} type="text" id="todo" name="todoInput" />
                <button onClick={onClickAdd} style={{
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
