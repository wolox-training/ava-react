import { ApiResponse } from 'apisauce';
import Session from 'types/Session';
import api, { setSession } from '../config/api';

export async function getBooks(
  session: Session,
): Promise<ApiResponse<any, any>> {
  setSession(session);
  return api.get('books');
}

export async function getBook(
  session: Session,
  id: string,
): Promise<ApiResponse<any, any>> {
  setSession(session);
  return api.get(`books/${id}`);
}
