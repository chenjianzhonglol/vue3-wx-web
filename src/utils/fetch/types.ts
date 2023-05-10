import 'axios';

type voidFunc = () => void;

declare module 'axios' {
  interface AxiosRequestConfig {
    isNotLoading?: boolean;
    isNotToast?: boolean;
    isUpload?: boolean;
    interceptorConfigLoading?: {
      onShow?: voidFunc; // 触发展示loading时的hook
      onHide?: voidFunc; // 触发关闭loading时的hook
    };
    interceptorConfigResponse?: {
      onError?: (msg: string) => void;
    };
    interceptorConfigXhrError?: {
      onError?: (msg: string) => void;
    };
  }
}
