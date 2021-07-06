import React, { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  flashMessageActions,
  flashMessageSelectors,
} from '../../store/flashMessage';

const FlashMessageContainer = styled.div`
  bottom: 100px;
  right: 100px;
  width: 400px;
  z-index: 5000;
`;

const FlashMessageItem = styled.div`
  min-height: 80px;
`;

export const FlashMessage: React.FC = () => {
  const flashMessages = useSelector(flashMessageSelectors.getMessages);
  const dispatch = useDispatch();

  const messageClkHandle =
    (id: number) => (e: SyntheticEvent<HTMLDivElement>) => {
      e.preventDefault();
      dispatch(flashMessageActions.deleteMessage(id));
    };

  return (
    <FlashMessageContainer className={`position-fixed d-flex flex-column`}>
      {flashMessages.reverse().map((msg) => (
        <FlashMessageItem
          key={msg.id}
          className={`flex-grow-1 d-flex p-2 mt-2 
            border rounded-lg app__cursor-pointer 
            justify-content-center align-items-center
            font-weight-bold ${msg.type}`}
          onClick={messageClkHandle(msg.id)}
        >
          {msg.message}
        </FlashMessageItem>
      ))}
    </FlashMessageContainer>
  );
};
