import { ApiResponse } from 'apisauce';
import api, { getSession } from '../config/api';

import Session from '../types/Session';

export async function login(user: any, handleSession?: (session: Session) => void): Promise<ApiResponse<any, any>> {
  const response = await api.post(`users/sign_in`, user);

  startSession(response, handleSession);

  return response;
}

export async function signUp(user: any, handleSession?: (session: Session) => void): Promise<ApiResponse<any, any>> {
  const response = await api.post(`users`, user);

  startSession(response, handleSession);

  return response;
}

function startSession(response: ApiResponse<any, any>, handleSession?: (session: Session) => void) {
  if (response.ok) {
    const session = getSession(response);

    handleSession?.(session);
  }
}
