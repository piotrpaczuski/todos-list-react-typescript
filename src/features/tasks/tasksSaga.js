import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setTasksLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks, setLoading } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    yield put(setLoading(true));
    yield delay(1 * 1000);
    
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(console.error, "Błąd pobierania przykładowych zadań!!!");
    };

    yield put(setLoading(false));
};

function* saveTasksInLocalStorage() {
    const tasks = yield select(selectTasks);
    yield call(setTasksLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorage);
};