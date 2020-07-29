import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CopyOfEmailAuth19480Saga from '../features/CopyOfEmailAuth19480/redux/sagas';
import CopyOfEmailAuth19479Saga from '../features/CopyOfEmailAuth19479/redux/sagas';
import CopyOfEmailAuth19478Saga from '../features/CopyOfEmailAuth19478/redux/sagas';
import CopyOfEmailAuth19477Saga from '../features/CopyOfEmailAuth19477/redux/sagas';
import EmailAuth19476Saga from '../features/EmailAuth19476/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CopyOfEmailAuth19480Saga,
CopyOfEmailAuth19479Saga,
CopyOfEmailAuth19478Saga,
CopyOfEmailAuth19477Saga,
EmailAuth19476Saga,
    
  ]);
}