import { contextFactory } from '../../../config/context';
import Session from '../../../types/Session';
import { Nullable } from '../../../utils/types';

export interface UserState {
  session: Nullable<Session>;
}

export const INITIAL_STATE = {
  session: { "uid": "agustin.vazquez@wolox.com.ar", "access-token": "2TY9PyhTR_4ZyaulPTHaTQ", "client": "bM5aB5Ffv4k92uiMeJzqHA" }
};

enum ActionTypes {
  SET_SESSION = 'SET_SESSION',
  RESET_SESSION = 'RESET_SESSION'
}

interface SetSession {
  type: ActionTypes.SET_SESSION;
  payload: Session;
}

interface ResetSession {
  type: ActionTypes.RESET_SESSION;
}

export type Action = SetSession | ResetSession;

export const actionCreators = {
  setFoo: (session: Session): SetSession => ({ type: ActionTypes.SET_SESSION, payload: session }),
  resetFoo: (): ResetSession => ({ type: ActionTypes.RESET_SESSION })
};

export const reducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case ActionTypes.SET_SESSION: {
      return { ...state, session: action.payload };
    }
    case ActionTypes.RESET_SESSION: {
      return { ...state, session: null };
    }
    default: {
      return state;
    }
  }
};

export const { useSelector, Context, useDispatch } = contextFactory<UserState, Action>(INITIAL_STATE);