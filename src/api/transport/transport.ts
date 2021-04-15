import axios, {AxiosPromise, AxiosRequestConfig} from "axios";
import {AjaxWorkReport} from "../auth/types";
import {logger} from "../../utils/logger";
import {BASE_URL} from "../../config/API";

export const ajaxRequest = async (requestConfig: AxiosRequestConfig): Promise<AxiosPromise | undefined> => {
  const ajaxWorkReport: AjaxWorkReport = {
    config: requestConfig,
    response: null,
    error: null,
  }
  try {
    const response = await axios({
      ...requestConfig,
      baseURL: BASE_URL
    });
    ajaxWorkReport.response = response;
    return response;
  } catch (e) {
    ajaxWorkReport.error = e;
    throw e;
  } finally {
    logger('ajaxRequest', ajaxWorkReport);
  }
}

