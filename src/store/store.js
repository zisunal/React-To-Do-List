import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./reducers/listReducer";
import settingsReducer from "./reducers/settingsReducer";

const store = configureStore({
    reducer: {
        list: listReducer,
        settings: settingsReducer,
    }
})

export default store