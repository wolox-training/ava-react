import { ApiResponse } from 'apisauce';
import { saveData, SESSION } from '~utils/manageData';
import api from '../config/api';

export async function login(user: any, handleAccessToken?: (accessToken: string) => void): Promise<ApiResponse<any, any>> {
  const response = await api.post(`users/sign_in`, user);

  startSession(response, handleAccessToken);

  return response;
}

export async function signUp(user: any, handleAccessToken?: (accessToken: string) => void): Promise<ApiResponse<any, any>> {
  const response = await api.post(`users`, user);

  startSession(response, handleAccessToken);

  return response;
}

function startSession(response: ApiResponse<any, any>, handleAccessToken?: (accessToken: string) => void) {
  if (response.ok) {
    const headers: any = response.headers;
    const accessToken = headers['access-token'];

    handleAccessToken?.(accessToken);
  }
}
