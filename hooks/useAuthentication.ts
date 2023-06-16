import {auth} from '../utils/Firebase';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';


type WrappedComponent = /*unresolved*/ any;

const AuthCheck = (WrappedComponent: React.ComponentType<any>) => {
  const WithAuth: React.FC<any> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          router.push('/login');
        }
      });

      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default AuthCheck;





// import { useState, useEffect } from 'react';
// import {auth} from '../utils/Firebase';
// import { onAuthStateChanged } from "firebase/auth";
// import { User } from 'firebase/auth';

// export const useAuthentication = () => {
//     const [user, setUser] = useState<User | null>(null);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (authUser: User | null) => {
//           if (authUser) {
//             // User is signed in
//             setUser(authUser);
//           } else {
//             // User is signed out
//             setUser(null);
//           }
//         });

//         // Clean up the listener when the component unmounts
//         return () => unsubscribe();
//       }, []);

//     return user;
// };