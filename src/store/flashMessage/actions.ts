import { FlashMessageBody, FlashMessageType } from '../../types/flashMessage';
import {
  AddMessage,
  DeleteMessage,
  FlashMessageActionType,
  SetCurrentId,
  ShowMessage,
} from './types';

export const addMessage = (message: FlashMessageType): AddMessage => ({
  type: FlashMessageActionType.ADD_MESSAGE,
  payload: {
    message,
  },
});

export const setCurrentId = (id: number): SetCurrentId => ({
  type: FlashMessageActionType.SET_CURRENT_ID,
  payload: {
    id,
  },
});

export const showMessage = (message: FlashMessageBody): ShowMessage => ({
  type: FlashMessageActionType.SHOW_MESSAGE,
  payload: {
    message,
  },
});

export const deleteMessage = (id: number): DeleteMessage => ({
  type: FlashMessageActionType.DELETE_MESSAGE,
  payload: {
    id,
  },
});
