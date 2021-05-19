import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { logger } from '../../utils/logger';
import { ACCESS_TOKEN_LS_KEY, DEFAULT_HEADERS } from '../../config/API';
import { BASE_URL } from '../../config/host';
import { AjaxWorkReport } from './types';

export const ajaxRequest = async (
  requestConfig: AxiosRequestConfig,
): Promise<AxiosPromise> => {
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
): Promise<AxiosResponse> => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_LS_KEY) ?? '';
  const finalRequestConfig: AxiosRequestConfig = {
    ...requestConfig,
    headers: {
      ...requestConfig.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return ajaxRequest(finalRequestConfig);
};
