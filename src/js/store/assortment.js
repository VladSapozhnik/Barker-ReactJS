import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import axios from 'axios';

export const fetchAssortment = createAsyncThunk(
    'posts/fetchAssortment',
    async function () {
        try {
            const response = await fetch(`./JSON/assortmentProduct.json`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log('Error')
        }
    }
);

export const fetchAssortmentSelect = createAsyncThunk(
    'posts/fetchAssortmentSelect',
    async function () {
        try {
            const response = await fetch(`./JSON/assortmentSelect.json`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log('Error')
        }
    }
);

export const Assortment = createSlice({
    name: 'assortment',
    initialState: {
        assortmentArray: [],
        assortmentSelect: [],
        status: null
    },
    extraReducers: {
        [fetchAssortment.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchAssortment.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.assortmentArray = action.payload;
        },
        [fetchAssortmentSelect.pending]: state => {
            state.status = 'loading';
        },
        [fetchAssortmentSelect.fulfilled]: (state, action) => {
            state.assortmentSelect = action.payload;
        }
    }
});

export const assortmentArray = state => state.assortment.assortmentArray;
export const assortmentSelect = state => state.assortment.assortmentSelect;

export default Assortment.reducer;
