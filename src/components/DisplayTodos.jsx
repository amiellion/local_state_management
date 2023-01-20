import React, { useContext } from 'react';
import TodoComponent from './TodoComponent';
import { MainContext } from '../Provider';
import { Row, Col } from 'antd';

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

const DisplayTodo = () => {
    const { todos, onClickRemove } = useContext(MainContext);
    const renderedTodos = todos.map((item, index) => {
        return (
            <Col span={24}>
                <TodoComponent todo={item.todo} id={item.id} onClickRemove={onClickRemove} />
            </Col>

        );
    });

    return (
        <Row style={{ width: '100%' }} gap={[25, 25]}>
            {renderedTodos}
        </Row>
    );
};

export default DisplayTodo;
