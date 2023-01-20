import { Card } from "antd";
import { useContext } from "react";
import { MainContext } from "../Provider";
/*
    Object destructuring
    props = {
        todo,
        id
    }
    
    const myprops = props;
    const { todo, id } = myprops;


    Array Destructuring
    const myArray = [props.id, props.todo];
    const [id, todo] = myArray;

*/

const TodoComponent = ({ todo, id }) => {
    const { onClickRemove } = useContext(MainContext);

    return (
        <Card>

            <p style={{ margin: 5 }}>Todo Name: {todo}</p>
            <p style={{ margin: 5 }}>Todo ID: {id}</p>
            <button
                style={{
                    backgroundColor: 'red'
                }}
                onClick={() => onClickRemove(id)}
            >Remove Todo</button>
        </Card>
    );
};

export default TodoComponent;
