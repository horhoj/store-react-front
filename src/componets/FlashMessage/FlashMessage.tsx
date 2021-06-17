import React, { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  flashMessageActions,
  flashMessageSelectors,
} from '../../store/flashMessage';
import styles from './styles.module.scss';

export const FlashMessage: React.FC = () => {
  const flashMessages = useSelector(flashMessageSelectors.getMessages);
  const dispatch = useDispatch();

  const messageClkHandle =
    (id: number) => (e: SyntheticEvent<HTMLDivElement>) => {
      e.preventDefault();
      dispatch(flashMessageActions.deleteMessage(id));
    };

  return (
    <div
      className={`position-fixed d-flex flex-column ${styles.flashMessageContainer}`}
    >
      {flashMessages.reverse().map((msg) => (
        <div
          key={msg.id}
          className={`flex-grow-1 d-flex p-2 mt-2 
            border rounded-lg app__cursor-pointer 
            justify-content-center align-items-center
            font-weight-bold ${msg.type} ${styles.flashMessage}`}
          onClick={messageClkHandle(msg.id)}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
};
