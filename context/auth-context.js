import { useEffect, useState, useContext, createContext } from 'react';
import {
  handleUserStateChanged,
  getCurrentUser,
  signOutUser,
  createUserDocument
} from '../utils/user';
import { useRouter } from 'next/router';

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(getCurrentUser());
  const [isPending, setIsPending] = useState(!user);
  const router = useRouter();

  async function onUserStateChanged(user) {
    if (user) {
      console.log({ user });
      const userData = await createUserDocument(user);
      console.log({ userData });
      setUser(userData);
      return setIsPending(false);
    }
    setUser(user);
    setIsPending(false);
    if (!user) {
      router.push('/login');
    }
  }

  useEffect(() => {
    const unsubscribe = handleUserStateChanged(onUserStateChanged);
    return () => unsubscribe();
  }, []);

  if (isPending) {
    return <div>Is Loading...</div>;
  }

  const signOut = () => signOutUser();

  return <AuthContext.Provider value={{ user, signOut }} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
