import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

import { getSession } from '@/actions/fetch-sessions';
import ISession from '@/models/ISession';
import IUser from '@/models/IUser';

//: use this context wherever you want to access the AuthProvider
const AuthContext = createContext(null);

export default AuthContext;
export { AuthProvider };

//: use this component in the _app.tsx file to share the authentication state
//: globally
function AuthProvider({ children }) {
  const [user, setUser] = useState<IUser>(null);
  const router = useRouter();

  const login = async (): Promise<void> => {
    if ('id_token' in router.query || 'access_token' in router.query) {
      const session: ISession = await getSession(location.search);

      router.replace('/');
      sessionStorage.setItem('session', JSON.stringify(session));
      setUser(session.user);
    }
  };

  const logout = (): void => {
    sessionStorage.removeItem('session');
    setUser(null);
    router.push('/');
  };

  const getSessionStorage = (): ISession | null => {
    try {
      return JSON.parse(sessionStorage.getItem('session'));
    } catch (_error) {
      console.error((_error as SyntaxError).message);
      return null;
    }
  };

  const getToken = (): string | null => {
    return getSessionStorage().token;
  };

  //: use this custom hook to set the local session into the global state each
  //: time a page is refreshed; use it only on page components
  const useSession = (): void => {
    useEffect(() => {
      const session: ISession = getSessionStorage();

      setUser(session?.user);
    }, []);
  };

  const isUserLoggedIn = (): boolean => {
    return getSessionStorage() ? true : false;
  };

  return (
    <AuthContext.Provider value={{
      user, login, logout, getToken, isUserLoggedIn, useSession
    }}>
      {children}
    </AuthContext.Provider>
  );
};
