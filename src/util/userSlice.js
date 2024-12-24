const userSlice = createSlice({
    name: 'user',
    intialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    },
});

export const { addUser, removeUser } = userSlice.action;

export default userSlice.reducer;