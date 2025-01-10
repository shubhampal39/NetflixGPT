import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {},
    reducers: {
        addNowPlayingMovies: (state, actions) => {
            state.nowPlayingMovies = actions.payload;
        }

    }
})

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducers;