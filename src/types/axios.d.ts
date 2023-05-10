import 'axios';

declare global {
  type ResponseData<T = any> = {
    code: number;
    msg: string;
    Msg: string;
    timeStamp: number;
    data: T;
  };
}

declare module 'axios' {
  interface AxiosRequestConfig {
    isNotLoading?: boolean;
    isNotToast?: boolean;
    isUpload?: boolean;
    isNeedLogin?: boolean;
    brand?: string;
    platformCode?: string;
    cancelRequest?: (message?: string, config: AxiosRequestConfig) => void;
  }

  interface AxiosInstance {
    post<R = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<ResponseData<R>>;
  }
}
