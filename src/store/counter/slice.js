import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    pokemons: [],
};


// First, create the thunk
export const fetchPokemon = createAsyncThunk(
    'pokemon/limit=151',
    async (payload, thunkAPI) => {

        console.log({ payload });
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(response => response.json());
        console.log("🚀 ~ file: slice.js:15 ~ response", response);
        return response.results;
    }
);


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPokemon.fulfilled, (state, action) => {
            console.log("🚀 ~ file: slice.js:43 ~ builder.addCase ~ state, action", state, action);
            // Add user to the state array
            state.pokemons = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;