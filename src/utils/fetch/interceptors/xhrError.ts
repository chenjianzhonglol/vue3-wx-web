/**
 * 参考axios文档错误处理
 * axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
 */

const codeMsgMap = {
  400: '请求错误',
  401: '无权限',
  403: '拒绝访问',
  404: '请求地址错误',
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不支持'
};

export function genXhrErrorInterceptor(config: any) {
  return (err: any) => {
    const { onError } = config.interceptorConfigXhrError || {};
    if (onError) {
      let errMsg = '';
      if (err.response) {
        errMsg = codeMsgMap[err.response.status as keyof typeof codeMsgMap] || '服务器错误';
      } else if (err.request) {
        errMsg = '请求无响应';
      } else {
        // errMsg = '请求设置错误'
      }
      errMsg && onError(errMsg);
    }
    return Promise.reject(err);
  };
}
