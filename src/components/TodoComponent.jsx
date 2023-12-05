//@dependencies
import { Card } from "antd";
import { useContext } from "react";

//store
import { MainContext } from "../Provider";


// props -> object
/* 
    {
        todo,
        id
    }
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
