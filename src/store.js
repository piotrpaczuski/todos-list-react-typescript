import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

export default configureStore({
    reducer: {
        tasks: tasksReducer
    },
    middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga);