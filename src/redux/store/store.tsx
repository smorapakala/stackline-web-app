import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../reducers/reducers.tsx";

const store = configureStore({
    reducer: {
        product: productReducer
    }
});

export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;