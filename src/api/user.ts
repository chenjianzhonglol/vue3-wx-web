import { instance } from '@/utils/fetch';
import { APPID } from '@/constant/global';

export const FetchUserInfo = (params = {}, config = {}) =>
  instance.get<any>(`/api/wx/auth/${APPID}/user`, { params, ...config });
