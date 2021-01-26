import { ApiResponse } from 'apisauce';
import api from '../config/api';

export const SIGN_UP = '';
export const LOGIN = '/sign_in';

export async function postUser(action: typeof SIGN_UP | typeof LOGIN, user:any):Promise<ApiResponse<any, any>> {
  return api.post(`users${action}`, user);
}
