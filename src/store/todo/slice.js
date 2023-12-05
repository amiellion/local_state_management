import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todo: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo = [
                ...state?.todo,
                action.payload
            ];
        },
        removeTodo: (state, action) => {
            const filteredArr = state?.todo?.filter(item => item.id !== action.payload)
            state.todo = filteredArr
        },
    },
});



// Action creators are generated for each case reducer function
export const TODO_SLICE_ACTIONS = todoSlice.actions;
export default todoSlice.reducer;