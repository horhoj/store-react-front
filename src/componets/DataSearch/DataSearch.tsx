import React, { useEffect, useRef, useState } from 'react';
import { DataSearchProps } from './types';
import styles from './styles.module.scss';
import { TimeoutID } from '../../types/system';
import { INPUT_DELAY } from '../../config/UI';

export const DataSearch: React.FC<DataSearchProps> = ({
  findStr,
  searchCb,
  isLoading,
  updateBtnClkCb,
}) => {
  const [findStrValue, setFindStrValue] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  useEffect(() => {
    const intervalId: TimeoutID = setTimeout(() => {
      if (findStr !== findStrValue) {
        searchCb(findStrValue.trim());
        setIsInputFocused(true);
      }
    }, INPUT_DELAY);
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [findStrValue]);

  useEffect(() => {
    if (!isLoading) {
      if (searchInputRef.current && isInputFocused) {
        searchInputRef.current.focus();
        setIsInputFocused(false);
      }
    }
    // eslint-disable-next-line
  }, [isLoading]);

  const findStrCLearBtnClkHandle = () => {
    if (findStrValue !== '') {
      setFindStrValue('');
      searchCb('');
    }
  };

  return (
    <div className={styles.finder}>
      <button
        className="btn btn-primary btn-sm mr-2 ml-1"
        onClick={updateBtnClkCb}
      >
        Обновить
      </button>
      <input
        type="text"
        className="form-control"
        value={findStrValue}
        onChange={(e) => setFindStrValue(e.target.value)}
        ref={searchInputRef}
      />
      <button
        className="btn btn-primary btn-sm ml-2 mr-1"
        onClick={findStrCLearBtnClkHandle}
      >
        Очистить
      </button>
    </div>
  );
};
