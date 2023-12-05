import { useState, createContext } from 'react';
import { v4 as uuidv4 } from "uuid";


export const MainContext = createContext();

function MainStore({ children }) {


    // initialize State Values
    const [todos, setTodos] = useState([
        {
            todo: 'Todo Sample 1',
            id: 'todo1',
        },
        {
            todo: 'Todo Sample 2',
            id: 'todo2',
        }
    ]);
    const onClickAdd = (value) => {

        setTodos(state => {

            //copy current state
            const newState = [...state];

            //add new element in the new state
            newState.push({
                todo: value || "Todo Sample 3",
                id: uuidv4(),
            });

            //return new state
            return newState;
        });
    };

    const onClickRemove = (id) => {
        setTodos(state => {
            const filteredArray = state.filter((item, index) => item.id !== id); // remove todo with x ID
            return filteredArray; // return new state
        });
    };

    // initialize state values for user
    const [userProfile, setUserProfile] = useState({
        name: "Default Name",
        age: "15",
        address: "#555 Sardines"
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
