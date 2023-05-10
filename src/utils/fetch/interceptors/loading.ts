import type { AxiosResponse, AxiosRequestConfig } from 'axios';

const DELAY_TIME = 50; // loading 延迟加载时间（ms），响应小于该时间的接口无需展示loading
const MIN_RUN_TIME = 200; // loading 最少持续时间（ms），防止loading一闪而过体验不好

let xhrCount = 0;
let delayTimer: NodeJS.Timeout | null, runTimer: NodeJS.Timeout | null;

let hideCb: () => void;

function closeLoading() {
  if (xhrCount > 0) xhrCount--;
  if (xhrCount === 0) {
    delayTimer && clearTimeout(delayTimer);
    delayTimer = null;
    runTimer = setTimeout(() => {
      if (hideCb) {
        hideCb();
      }
      runTimer && clearTimeout(runTimer);
      runTimer = null;
    }, MIN_RUN_TIME);
  }
}

export function loadingRequestInterceptor(config: AxiosRequestConfig) {
  if (!config.isNotLoading) {
    xhrCount++;
    const { onShow, onHide } = config.interceptorConfigLoading || {};
    if (onShow && typeof onShow === 'function' && onHide && typeof onHide === 'function' && !delayTimer) {
      delayTimer = setTimeout(() => {
        if (runTimer) {
          clearTimeout(runTimer);
          runTimer = null;
        }
        onShow();
        hideCb = onHide;
      }, DELAY_TIME);
    }
  }
  return config;
}

export function loadingResponseInterceptor(response: AxiosResponse) {
  if (!response.config.isNotLoading) {
    closeLoading();
  }
  return response;
}

export function loadingResponseErrorInterceptor(err: any) {
  closeLoading();
  return Promise.reject(err);
}
