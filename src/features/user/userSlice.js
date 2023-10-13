import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Arun",
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload;
        },
    },
});

export const { updateName } = userSlice.actions;

export const getUsername = (state) => state.user.username;

export default userSlice.reducer;
