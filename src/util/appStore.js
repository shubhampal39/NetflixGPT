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

const appStore = configureStore({
    reducer: {
        user: userSlice,
        // trailer:trailerSlice
        // movies:movieRahul,
    },

});
export default appStore;