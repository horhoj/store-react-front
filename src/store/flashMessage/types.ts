import { FlashMessageBody, FlashMessageType } from '../../types/flashMessage';

export enum FlashMessageActionType {
  ADD_MESSAGE = 'FLASH_MESSAGE/ADD_MESSAGE',
  SET_CURRENT_ID = 'FLASH_MESSAGE/SET_CURRENT_ID',
  SHOW_MESSAGE = 'FLASH_MESSAGE/SHOW_MESSAGE',
  DELETE_MESSAGE = 'FLASH_MESSAGE/DELETE_MESSAGE',
}

export interface FlashMessageState {
  messages: FlashMessageType[];
  currentId: number;
}

export type FlashMessageAction =
  | AddMessage
  | SetCurrentId
  | ShowMessage
  | DeleteMessage;

export interface AddMessage {
  type: FlashMessageActionType.ADD_MESSAGE;
  payload: {
    message: FlashMessageType;
  };
}

export interface SetCurrentId {
  type: FlashMessageActionType.SET_CURRENT_ID;
  payload: {
    id: number;
  };
}

export interface ShowMessage {
  type: FlashMessageActionType.SHOW_MESSAGE;
  payload: {
    message: FlashMessageBody;
  };
}

export interface DeleteMessage {
  type: FlashMessageActionType.DELETE_MESSAGE;
  payload: {
    id: number;
  };
}
