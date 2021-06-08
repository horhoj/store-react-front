import React, { useEffect, useState } from 'react';
import { delay } from '../../utils/effects/delay';
import { MODAL_HIDE_CHILDREN_DELAY } from '../../config/UI';
import styles from './styles.module.scss';
import { ModalWindowProps } from './types';

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
      delay(25).then(() => {
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
    <div
      className={`${styles.modalWindowExternalContainer} ${
        !(isShow && isShowInternal) ? styles.hiddenExternalContainer : ''
      }`}
      onClick={hideCb}
    >
      <div
        className={`bg-white pl-3 pr-3 pb-3 pt-5 rounded overflow-hidden position-relative ${
          styles.modalWindowInternalContainer
        } ${!(isShow && isShowInternal) ? styles.hiddenInternalContainer : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={`btn btn-sm btn-danger font-weight-bold ${styles.closeBtn}`}
          onClick={hideCb}
        >
          X
        </button>

        <div className="overflow-auto w-100 h-100 ">
          {isShowChildren ? children : ''}
        </div>
      </div>
    </div>
  ) : null;
};
