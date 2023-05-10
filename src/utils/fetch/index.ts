import axios from 'axios';

import {
  loadingRequestInterceptor,
  loadingResponseInterceptor,
  loadingResponseErrorInterceptor
} from './interceptors/loading';
import { responseInterceptor } from './interceptors/response';
import { genXhrErrorInterceptor } from './interceptors/xhrError';
import type { AxiosRequestConfig } from 'axios';
import { Toast } from 'vant';

function getInstance(otherConfig?: AxiosRequestConfig) {
  const defaultRequestConfig = {
    timeout: 10 * 1000,
    headers: {
      post: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
  };
  const config = Object.assign(defaultRequestConfig, otherConfig);
  const instance = axios.create(config);

  // 请求拦截：axios的请求拦截会先执行最后指定的回调函数先执行，依次向前面执行。
  // 响应拦截：axios的响应拦截会先执行最先指定的回调函数先执行，依次向后面执行

  // 处理 请求加密

  // 处理 加载中/关闭加载中
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  instance.interceptors.request.use(loadingRequestInterceptor);
  instance.interceptors.response.use(loadingResponseInterceptor, loadingResponseErrorInterceptor);

  // 处理 服务端返回的数据
  instance.interceptors.response.use(responseInterceptor);

  // 处理 xhr 错误
  instance.interceptors.response.use(null, genXhrErrorInterceptor(config));
  return instance;
}

const interceptorConfigLoading = {
  onShow() {
    Toast.loading({
      message: '正在加载...',
      duration: 5000
    });
  },
  onHide() {
    Toast.loading.clear();
  }
};

const interceptorConfigResponse = {
  onError(err: string) {
    Toast.fail(err);
  }
};

const interceptorConfigXhrError = {
  onError(err: string) {
    Toast.fail(err);
  }
};
export const instance = getInstance({
  interceptorConfigLoading,
  interceptorConfigResponse,
  interceptorConfigXhrError
});
