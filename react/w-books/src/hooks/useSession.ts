import Session from "../types/Session";
import { deleteData, getData, saveData, SESSION } from "../utils/manageData";

const useSession = () => {

  const isLogged = (): boolean => {
    const session = getSession();
    if (session) return true;

    return false;
  };

  const startSession = (session: Session) => {
    saveData(SESSION, session);
  };

  const getSession = () => {
    const session = getData(SESSION);

    return session;
  };


  const stopSession = () => {
    deleteData(SESSION);
  };

  return {
    isLogged,
    startSession,
    stopSession,
    getSession,
  };
};

export default useSession;
