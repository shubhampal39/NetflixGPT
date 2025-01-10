// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";

// const appStore = configureStore({
//     reducer: {
//         user: userSlice
//     }
// })

// export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice
        // trailer:trailerSlice
        // movies:movieRahul,
    },

});
export default appStore;