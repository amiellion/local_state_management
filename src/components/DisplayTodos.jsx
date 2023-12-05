//@dependencies
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import React from 'react';

//components
import TodoComponent from './TodoComponent';



const DisplayTodo = () => {

    //get state from redux using useSelectorHook
    // state = object || view src/store for the keys (configured within combineReducers) 
    const { todo } = useSelector(state => state.todo);
    console.log("🚀 ~ file: DisplayTodos.jsx:16 ~ DisplayTodo ~ todo:", todo)

    //transform todos
    const renderedTodos = todo.map((item, index) => {
        return (
            <Col
                span={24}
                style={{
                    margin: `10px 0`
                }}
                key={`todos-${item.id}-${index}`} // required when rendering components from array || refer to: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key 
            >
                {/* 
                    props: object
                    {
                        todo,
                        id
                    }
                */}
                <TodoComponent todo={item.todo} id={item.id} />
            </Col>

        );
    });

    return (
        <Row style={{ width: '100%' }} gap={[25, 25]}>
            {/* display rendered todos */}
            {renderedTodos}
        </Row>
    );
};

export default DisplayTodo;
