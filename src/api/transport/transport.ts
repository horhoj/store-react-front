import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { AjaxWorkReport } from './types';
import { logger } from '../../utils/logger';
import {
  ACCESS_TOKEN_LS_KEY,
  BASE_URL,
  DEFAULT_HEADERS,
} from '../../config/API';

export const ajaxRequest = async (
  requestConfig: AxiosRequestConfig,
): Promise<AxiosPromise | undefined> => {
  const ajaxWorkReport: AjaxWorkReport = {
    config: requestConfig,
    response: null,
    error: null,
  };
  try {
    const finalRequestConfig = {
      ...requestConfig,
      headers: {
        ...DEFAULT_HEADERS,
        ...requestConfig.headers,
      },
      baseURL: BASE_URL,
    };
    const response = await axios(finalRequestConfig);
    ajaxWorkReport.response = response;
    return response;
  } catch (e) {
    ajaxWorkReport.error = e;
    throw e;
  } finally {
    logger('ajaxRequest', ajaxWorkReport);
  }
};

export const ajaxRequestWithAuthHeader = async (
  requestConfig: AxiosRequestConfig,
) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_LS_KEY) ?? '';
  const finalRequestConfig: AxiosRequestConfig = {
    ...requestConfig,
    headers: {
      ...requestConfig.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return await ajaxRequest(finalRequestConfig);
};
