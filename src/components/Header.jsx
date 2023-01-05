import React from "react";
import Logo from "../img/updated logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if(!user){
      const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    //  save login user info in localstorage 
    localStorage.setItem('user', JSON.stringify(providerData[0]));
    }
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop and Tablet Menu  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        {/* Logo  */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-28 object-cover" alt="logo" />
        </Link>
        {/* Menu List  */}
        <ul className="flex items-center gap-8">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Services
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Cart Basket and Avatar */}
        <div className="flex items-center justify-center gap-8">
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor ml-8 text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="userAvatar"
              className="w-10 h-10 min-w-[40px] drop-shadow-md cursor-pointer  rounded-full max-w-full align-middle border-none"
              onClick={login}
            />
            <div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-xl shadow-lg w-44 dark:bg-gray-700 absolute right-0 top-12">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {
                  user && user.email === "promiseobe531@gmail.com" && (
                    <li>
                      <Link to={'/createItem'}><p class="px-4 py-2  gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex">New Item <MdAdd className="text-textColor" /> </p></Link>
                    </li>
                  ) 
                }
               
                <li>
                  <a href="#" class="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out <MdLogout className="text-textColor" /> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div className="flex md:hidden">Hi</div>
    </header>
  );
}

export default Header;
