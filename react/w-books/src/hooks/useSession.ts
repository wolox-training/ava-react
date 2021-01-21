import { deleteData, getData, saveData, SESSION } from "../utils/manageData";

const useSession = () => {

  const isLogged = (): boolean => {
    const session = getSession();
    if (session) return true;

    return false;
  };

  const startSession = (accessToken:string) => {
    saveData(SESSION, accessToken);
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
  };
};

export default useSession;
