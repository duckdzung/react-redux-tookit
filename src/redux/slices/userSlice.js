import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers',
    async () => {
        const response = await axios.get("http://localhost:8080/user/all");
        return response.data
    })

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loading: false,
        error: false,
        errorMessage: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.error = action.error.message;
            })
    },
})

export default userSlice.reducer