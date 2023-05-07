import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setTasksLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  selectTasks,
  setLoading,
  setTasks,
} from "./tasksSlice";
import { TasksTypes } from "./tasksTypes";

function* fetchExampleTasksHandler() {
  yield put(setLoading(true));
  yield delay(1000);

  try {
    const exampleTasks: TasksTypes[] = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(console.error, "Błąd pobierania przykładowych zadań!!!");
  }
  yield put(setLoading(false));
}

function* saveTasksInLocalStorage() {
  const tasks: TasksTypes[] = yield select(selectTasks);
  yield call(setTasksLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorage);
}
