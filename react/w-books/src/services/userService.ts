import { ApiResponse } from 'apisauce';
import api from '../config/api';

export async function login(user: any): Promise<ApiResponse<any, any>> {
  const response = await api.post(`users/sign_in`, user);

  startSession(response);

  return response;
}

export async function signUp(user: any): Promise<ApiResponse<any, any>> {
  const response = await api.post(`users`, user);

  startSession(response);

  return response;
}

function startSession(response: ApiResponse<any, any>) {
  if (response.ok) {
    const headers: any = response.headers;
    const accessToken = headers['access-token'];

    console.log(accessToken);
  }
}
