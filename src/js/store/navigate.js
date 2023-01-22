import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchNavigate = createAsyncThunk(
    'navigate/fetchNavigate',
    async function () {
        try {
            const response = await fetch(`./JSON/navigate.json`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log('Error')
        }
    })

export const Navigate = createSlice({
    name: 'navigate',
    initialState: {
        navigateArray: [],
        status: null
    },
    extraReducers: {
        [fetchNavigate.pending]: state => {
            state.state = 'loading'
        },
        [fetchNavigate.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.navigateArray = action.payload;
        }
    }
})

export const navigateArray = state => state.navigate.navigateArray;

export default Navigate.reducer;