import React, { useState } from 'react';
import { auth } from '../../utils/Firebase';
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
} from "firebase/auth";


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
                // successMessage("Account created 🎉");
                // router.push("/login");
                window.location.href = '/';
            })
            .catch((error) => {
                console.error(error);
                alert(error);
                // errorMessage("Account creation declined ❌");
        });
      // Handle successful signup
      closeModal(); // Close the modal after successful signup
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup error
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
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
