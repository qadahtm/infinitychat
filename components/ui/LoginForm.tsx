import React, { useState } from 'react';
import { auth } from '../../utils/Firebase';
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
} from "firebase/auth";

interface LoginFormProps {
  closeModal: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    //   await auth.signInWithEmailAndPassword(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // successMessage("Authentication successful 🎉");
                window.location.href = '/';
            })
            .catch((error) => {
                console.error(error);
                alert("hi")
                // errorMessage("Incorrect Email/Password ❌");
            });
      // Handle successful login
      closeModal(); // Close the modal after successful login
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;



// // LoginForm.tsx

// import React, { useState } from 'react';
// import { auth } from '../../utils/Firebase';

// const LoginForm: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       // Handle successful login
//     } catch (error) {
//       console.error('Login error:', error);
//       // Handle login error
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
