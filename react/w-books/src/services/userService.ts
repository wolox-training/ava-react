import { ApiResponse } from 'apisauce';
import { saveData, SESSION } from '~utils/manageData';
import api from '../config/api';

export const SIGN_UP = '';
export const LOGIN = '/sign_in';

export async function postUser(
  action: typeof SIGN_UP | typeof LOGIN,
  user: any,
  handleAccessToken?: (accessToken: string) => void
): Promise<ApiResponse<any, any>> {
  const response = await api.post(`users${action}`, user);

  if (response.ok) {
    const token = "test_token";
    handleAccessToken?.(token);
  }

  return response;
}
