//@dependencies
import { Card } from "antd";
import { useDispatch } from "react-redux";

//store
import { TODO_SLICE_ACTIONS } from "../store/todo/slice";

// props -> object
/* 
    {
        todo,
        id
    }
*/
const TodoComponent = ({ todo, id }) => {

    // redux hook -> needed in order to execute actions from redux slice
    const dispatch = useDispatch();
    const onClickRemove = () => {
        dispatch(TODO_SLICE_ACTIONS.removeTodo(id))
    };

    return (
        <Card>
            <p style={{ margin: 5 }}>Todo Name: {todo}</p>
            <p style={{ margin: 5 }}>Todo ID: {id}</p>
            <button
                style={{
                    backgroundColor: 'red'
                }}
                onClick={onClickRemove}
            >Remove Todo</button>
        </Card>
    );
};

export default TodoComponent;
