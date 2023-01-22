import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAdvantage = createAsyncThunk(
    'advantage/fetchAdvantage',
    async function () {
        try {
            const response = await fetch(`./JSON/advantage.json`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log('Error')
        }
    }
)

export const Advantage = createSlice({
    name: "advantage",
    initialState: {
        advantageArray: [],
        status: null
    },
    extraReducers: {
        [fetchAdvantage.pending]: state => {
            state.status = 'loading';
        },
        [fetchAdvantage.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.advantageArray = action.payload;
        }
    }
})

export const advantage = state => state.advantage.advantageArray;

export default Advantage.reducer;