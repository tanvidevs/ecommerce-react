import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // Do something with the user object
      })
      .catch((error) => {
        // Handle errors
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // toast.success("Log Out Sucessfully!");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-13 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img
            className="w-20"
            src="https://www.communiquepr.com/wp-content/uploads/2013/04/Google-Logo.jpg"
            alt=""
          />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>

      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-13 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img
            className="w-10"
            src="https://www.kindpng.com/picc/m/128-1280192_github-logo-png-github-png-transparent-png.png"
            alt=""
          />
          <span className="text-sm text-gray-900">Sign in with GitHub</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Login;
