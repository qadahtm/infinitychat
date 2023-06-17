import React, { useState } from 'react';
import { auth } from '../../utils/Firebase';
import {
	createUserWithEmailAndPassword,
} from "firebase/auth";
import {notify} from '../../utils/helpers';


interface SignupFormProps {
  closeModal: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    //   await auth.createUserWithEmailAndPassword(email, password);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              notify("Account created 🎉", "success");
          })
          .catch((error) => {
            console.error(error);
            alert(error);
            notify("Account creation declined ❌", "error");
        });
      // Handle successful signup
      closeModal();
    } catch (error) {
      console.error('Signup error:', error);
      notify(JSON.stringify(error), "error");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;



// // SignupForm.tsx

// import React, { useState } from 'react';
// import { auth } from '../../utils/Firebase';

// const SignupForm: React.FC = ({ closeModal }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await auth.createUserWithEmailAndPassword(email, password);
//       closeModal(); // Close the modal after successful signup
//       // Handle successful signup
//     } catch (error) {
//       console.error('Signup error:', error);
//       // Handle signup error
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <h2>Sign Up</h2>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignupForm;
