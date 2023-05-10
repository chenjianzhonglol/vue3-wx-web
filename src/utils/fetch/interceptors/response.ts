import type { AxiosResponse } from 'axios';

const NORMAL_CODES = [0, 1];
const NOT_LOGIN_CODES = [-2, -97, -96, -90, -91];

export function responseInterceptor({ data, config }: AxiosResponse) {
  data.config = config;
  // 未登录的不处理，项目中单独处理
  if (NOT_LOGIN_CODES.includes(data.code)) {
    return data;
  }
  if (!NORMAL_CODES.includes(data.code)) {
    const { onError } = config.interceptorConfigResponse || {};
    !config.isNotToast && onError && onError(data.msg || data.Msg || data.message);
    return Promise.reject(data.msg || data.Msg || data.message);
  }
  return data;
}
