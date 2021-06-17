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

export interface FlashMessageAction<T = any> {
  type: FlashMessageActionType;
  payload: T;
}

export type AddMessage = FlashMessageAction<{ message: FlashMessageType }>;

export type SetCurrentId = FlashMessageAction<{ id: number }>;

export type ShowMessage = FlashMessageAction<{ message: FlashMessageBody }>;

export type DeleteMessage = FlashMessageAction<{
  id: number;
}>;
