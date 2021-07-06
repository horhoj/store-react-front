import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { delay } from '../../utils/effects/delay';
import { MODAL_HIDE_CHILDREN_DELAY } from '../../config/UI';
import { ModalWindowProps } from './types';

const hiddenExternalContainer = css`
  visibility: hidden;
  opacity: 0;
`;

const ModalWindowExternalContainer = styled.div<{ isHidden: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  transition: opacity 0.25s ease, visibility 0.2s ease;
  ${({ isHidden }) => (isHidden ? hiddenExternalContainer : '')}
`;

const hiddenInternalContainer = css`
  transform: scale(0.1);
`;

const ModalWindowInternalContainer = styled.div<{ isHidden: boolean }>`
  margin: 50px;
  overflow: auto;
  width: 90%;
  height: 90%;
  max-height: 800px;
  max-width: 1200px;
  transition: transform 0.25s ease;
  ${({ isHidden }) => (isHidden ? hiddenInternalContainer : '')}
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 0.75rem;
`;

export const ModalWindow: React.FC<ModalWindowProps> = ({
  children,
  hideCb,
  isShow,
}) => {
  useEffect(() => {
    if (isShow) {
      const body = document.body;
      if (body) {
        body.style.overflow = 'hidden';
      }
      return () => {
        if (body) {
          body.style.overflow = 'visible';
        }
      };
    }
  }, [isShow]);

  const [isShowChildren, setIsShowChildren] = useState(false);
  const [isShowInternal, setIsShowInternal] = useState(false);

  useEffect(() => {
    if (isShow) {
      setIsShowChildren(true);
      delay(0).then(() => {
        setIsShowInternal(true);
      });
    } else {
      delay(MODAL_HIDE_CHILDREN_DELAY).then(() => {
        setIsShowChildren(false);
        setIsShowInternal(false);
      });
    }
  }, [isShow]);

  return isShow || isShowInternal ? (
    <ModalWindowExternalContainer
      isHidden={!(isShow && isShowInternal)}
      onClick={hideCb}
    >
      <ModalWindowInternalContainer
        isHidden={!(isShow && isShowInternal)}
        className={`bg-white pl-3 pr-3 pb-3 pt-5 rounded overflow-hidden position-relative `}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn
          type="button"
          className={`btn btn-sm btn-danger font-weight-bold`}
          onClick={hideCb}
        >
          X
        </CloseBtn>

        <div className="overflow-auto w-100 h-100 ">
          {isShowChildren ? children : ''}
        </div>
      </ModalWindowInternalContainer>
    </ModalWindowExternalContainer>
  ) : null;
};
