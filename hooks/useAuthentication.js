import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged, User } from 'firebase/auth';
import {auth} from '../utils/Firebase';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  return { user, loading, router };
};

export default useAuth;
