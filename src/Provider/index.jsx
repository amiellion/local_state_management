import { useState, createContext } from 'react';
import { v4 as uuidv4 } from "uuid";


export const MainContext = createContext();

function MainStore({ children }) {


    const [todos, setTodos] = useState([
        {
            todo: 'Todo Sample 1',
            id: 'todo1',
        },
        {
            todo: 'Todo Sample 2',
            id: 'todo1',
        }
    ]);
    const onClickAdd = () => {

        setTodos(state => {
            const state2 = [...state];
            state2.push({
                todo: 'Todo Sample 3',
                id: uuidv4(),
            });
            return state2;
        });
    };

    const onClickRemove = (id) => {
        setTodos(state => {
            const filteredArray = state.filter((item, index) => item.id !== id);
            return filteredArray;
        });
    };


    const [userProfile, setUserProfile] = useState({
        name: "",
        age: "",
        address: ""
    });
    return (
        <MainContext.Provider
            value={{
                todos,
                onClickAdd,
                onClickRemove,



                userProfile,
                setUserProfile
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export default MainStore;
