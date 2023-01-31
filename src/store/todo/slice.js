import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    todo: [],
};

const getTodoIndex = (id) => {
    return;
};

export const counterSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        editTodo: (state, action) => {
            state.value -= 1;
        },
        removeTodof: (state, action) => {
            state.value += action.payload;
        },
    },
});



// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;