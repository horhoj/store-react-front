import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery, delay } from 'redux-saga/effects';
import { logger } from '../../utils/logger';
import { FLASH_MESSAGE_SHOW_DELAY } from '../../config/UI';
import {
  FlashMessageAction,
  FlashMessageActionType,
  ShowMessage,
} from './types';
import { addMessage, deleteMessage, setCurrentId } from './actions';
import { getCurrentId } from './selectors';

export function* flashMessageWatcher(): SagaIterator {
  yield takeEvery(FlashMessageActionType.SHOW_MESSAGE, showMessage);
}

export function* showMessage(action: ShowMessage): SagaIterator {
  yield call(logger, 'ShowMessage', action);
  const currentId = yield select(getCurrentId);
  const newCurrentId = currentId + 1;
  yield put<FlashMessageAction>(setCurrentId(newCurrentId));
  yield put<FlashMessageAction>(
    addMessage({ id: newCurrentId, ...action.payload.message }),
  );
  yield delay(FLASH_MESSAGE_SHOW_DELAY);
  yield put<FlashMessageAction>(deleteMessage(newCurrentId));
}
