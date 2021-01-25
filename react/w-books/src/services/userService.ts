import { ApiResponse } from 'apisauce';
import api, { getSession } from '../config/api';

import Session from '../types/Session';

export const SIGN_UP = '';
export const LOGIN = '/sign_in';

export async function postUser(
  action: typeof SIGN_UP | typeof LOGIN,
  user: any,
  handleSession?: (session: Session) => void
): Promise<ApiResponse<any, any>> {
  const response = await api.post(`users${action}`, user);

  if (response.ok) {
    const session = getSession(response);

    handleSession?.(session);
  }

  return response;
}
