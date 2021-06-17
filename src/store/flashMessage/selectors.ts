import { StoreState } from '../types';
import { FlashMessageType } from '../../types/flashMessage';

export const getCurrentId = (state: StoreState): number =>
  state.flashMessage.currentId;

export const getMessages = (state: StoreState): FlashMessageType[] =>
  state.flashMessage.messages;
