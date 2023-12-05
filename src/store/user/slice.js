import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "Default Name",
    age: "15",
    address: "#555 Tuna Sardines"
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setState: (state, action) => {
            console.log("🚀 ~ file: slice.js:14 ~ action:", action);
            return {
                ...state,
                ...action.payload
            }
        },
        resetState: () => {
            return initialState
        },
    },
});



// Action creators are generated for each case reducer function
export const USER_SLICE_ACTIONS = userSlice.actions;
export default userSlice.reducer;