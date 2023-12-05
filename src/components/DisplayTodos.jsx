//@dependencies
import React, { useContext } from 'react';
import { Row, Col } from 'antd';

//components
import TodoComponent from './TodoComponent';

//store
import { MainContext } from '../Provider';

const DisplayTodo = () => {

    //get todos array from Context;
    const { todos } = useContext(MainContext);
    const renderedTodos = todos.map((item, index) => {
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
