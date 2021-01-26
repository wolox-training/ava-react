import { ApiResponse } from 'apisauce';

import Session from 'types/Session';

import { Nullable } from '../utils/types';
import api, { setSession } from '../config/api';

export async function getBooks(
  session: Nullable<Session>,
  id?: string,
): Promise<ApiResponse<any, any>> {
  session && setSession(session);
  return api.get(id ? `books/${id}` : 'books');
}
