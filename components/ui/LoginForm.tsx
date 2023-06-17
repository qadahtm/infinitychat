import React, { useState } from 'react';
import { auth } from '../../utils/Firebase';
import { signInWithEmailAndPassword} from "firebase/auth";
import {notify} from '../../utils/helpers';

interface LoginFormProps {
  closeModal: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setLoading(false);
            notify("Authentication successful 🎉", "success");
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
            notify("Incorrect Email/Password ❌", "error");
        });
      closeModal();
    } catch (error) {
      setLoading(false);
      console.error('Login error:', error);
      notify(JSON.stringify(error), "error");
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
            className={`cursor-pointer bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded`}
          >
            {!loading ? <span>Login</span> : <span>Loggin...</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
