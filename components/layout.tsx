import React, { useState, useEffect} from 'react';
import Modal from './ui/Modal';
import SignupForm from './ui/SignupForm';
import LoginForm from './ui/LoginForm';
import { auth } from '../utils/Firebase';
import { User } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from 'next/router';

import profile from '../assets/profile.png';
import logo from "../assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { FaRobot } from 'react-icons/fa';
import AuthCheck from '../hooks/useAuthentication';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showUserOptions, setShowUserOptions] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser: User | null) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const toggleUserOptions = () => {
    setShowUserOptions((prevShowUserOptions) => !prevShowUserOptions);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogout = async () => {
    try {
      signOut(auth)
        .then(() => {
          // successMessage("Logout successful! 🎉");
          window.location.href = '/';
        })
        .catch((error) => {
          // errorMessage("Couldn't sign out ❌");
          alert("error");
      });
      // Logout successful
    } catch (error) {
      console.log(error);
      // Handle logout error
    }
  };

  const handleCreateBot = () => {
    router.push('/CreateInfinityChatBot');
  }

  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40  bg-card-custom shadow-lg">
        <div className="h-16  py-4">
          <nav className="flex justify-between mx-4 px-6">
            <div className='flex'>
              <Link href="/" className="hover:text-slate-600 cursor-pointer">
                <Image
                    src={logo}
                    alt="Me"
                    width="60"
                    height="60"
                    // className={styles.usericon}
                    priority
                  />
              </Link>
            </div>
            <div className="flex gap-2">
            {user ? (
              // <button onClick={handleLogout} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
                <div className="relative">
                    <button
                      onClick={toggleUserOptions}
                      className="bg-gray-200 hover:bg-gray-100 text-white font-bold p-2 rounded-full focus:outline-none"
                    >
                      {/* {user?.email.slice(0, 2)} */}
                      <Image src={profile} alt="profile" width={30} />
                    </button>
                    {showUserOptions && (
                      <div className="absolute right-0 mt-2 w-100 bg-white rounded shadow-lg p-3">
                        <div
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                          >
                          <div className='text-gray-400'>Sign as:</div>
                          {user.email}
                        </div>
                        <hr />
                        <button
                          onClick={handleCreateBot}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                        >
                          <div className='flex items-center gap-1'>
                            <FaRobot />
                            <div>
                              Create Your Bot
                            </div>
                          </div>
                        </button>
                        <hr />
                        <button
                          onClick={handleLogout}
                          className="bg-red-600 block px-4 py-2 text-white hover:bg-red-400 w-full text-left rounded"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                </div>
              // <AuthCheck>
              // </AuthCheck>
              ) : (
              <>
                <button onClick={openSignupModal} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
                <button onClick={openLoginModal} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              </>
            )}

              {showSignupModal && (
                <Modal closeModal={closeSignupModal}>
                  <SignupForm closeModal={closeSignupModal} />
                </Modal>
              )}

              {showLoginModal && (
                <Modal closeModal={closeLoginModal}>
                  <LoginForm closeModal={closeLoginModal} />
                </Modal>
              )}
            </div>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
