// import { createSlice } from "@reduxjs/toolkit";

// const movieSlice = createSlice({
//     name: "movies",
//     initialState: {
//         nowPlayingMovies: null,
//         trailerVideo: null,
//     },
//     reducers: {
//         addNowPlayingMovies: (state, actions) => {
//             state.nowPlayingMovies = actions.payload;
//         },
//         addTrailerVideo: (state, action) => {
//             state.trailerVideo = action.payload;
//         }

//     }
// })

// export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
// export default movieSlice.reducers;


import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
    moviesSlice.actions;

export default moviesSlice.reducer;