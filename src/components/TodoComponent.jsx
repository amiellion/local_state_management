
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

const TodoComponent = ({ todo, id, onClickRemove }) => {

    return (

        <div style={{
            border: '1px solid #ccc',
            borderRadius: 5,
            textAlign: 'center',
            padding: 10,
        }}>
            <p style={{ margin: 5 }}>Todo Name: {todo}</p>
            <p style={{ margin: 5 }}>Todo ID: {id}</p>
            <button
                style={{
                    backgroundColor: 'red'
                }}
                onClick={() => onClickRemove(id)}
            >Remove Todo</button>
        </div>
    );
};

export default TodoComponent;
