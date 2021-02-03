import { ApiResponse } from 'apisauce';

import Session from 'types/Session';

import { Nullable } from '../utils/types';
import api, { setSession } from '../config/api';

export async function getBooks(
  session: Nullable<Session>,
): Promise<ApiResponse<any, any>> {
  if(session) setSession(session);
  return api.get('books');
}

export async function getBook(
  session: Nullable<Session>,
  id: string,
): Promise<ApiResponse<any, any>> {
  if(session) setSession(session);
  return api.get(`books/${id}`);
}
