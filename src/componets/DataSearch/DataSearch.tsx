import React, { useEffect, useRef, useState } from 'react';
import { TimeoutID } from '../../types/system';
import { INPUT_DELAY } from '../../config/UI';
import { DataSearchProps } from './types';

export const DataSearch: React.FC<DataSearchProps> = ({
  findStr,
  searchCb,
  isLoading,
}) => {
  const [findStrValue, setFindStrValue] = useState<string>(findStr);
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
    <div className="d-flex">
      <button
        className="btn btn-primary btn-sm mr-2 app__btn-min-width"
        onClick={findStrCLearBtnClkHandle}
        type="button"
      >
        Очистить
      </button>
      <input
        type="text"
        className="form-control form-control-sm w-100"
        value={findStrValue}
        onChange={(e) => setFindStrValue(e.target.value)}
        ref={searchInputRef}
      />
    </div>
  );
};
