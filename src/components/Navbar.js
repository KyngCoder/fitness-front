import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className=" flex   justify-between items-center p-4 background primary-color font">
      <div className="flex justify-start items-center">
        <Link to="/" className="text-xl sm:text-4xl   text-white">
          Fitnetic
        </Link>
      </div>
      <GiHamburgerMenu
        className="text-white sm:hidden absolute top-6 right-10"
        onClick={() => setToggleMenu(true)}
      />
      <ul className="flex-1 hidden sm:flex text-xl justify-center items-center">
        <li className="m-2 hover:text-yellow-400">
          <Link to="/exercise">Exercise</Link>
        </li>
        <li className="m-2 hover:text-yellow-400">
          <a href="#about">About</a>
        </li>
        <li className="m-2 hover:text-yellow-400">
          <a href="#menu">Pricing</a>
        </li>
        <li className="m-2 hover:text-yellow-400">
          <a href="#contact">Benefits</a>
        </li>
        <li className="m-2 hover:text-yellow-400">
          <a href="#contact">Blog</a>
        </li>
        <li className="m-2 hover:text-yellow-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div></div>
      <div className="justify-end items-center text-lg hidden sm:flex">
        <a
          className="text-white mx-2  hover:text-yellow-300 duration-500 ease"
          href="#login"
        >
          login
        </a>
      </div>
      <div>
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-screen h-screen background duration-200 ease-out z-10 flex justify-center bg-red-3 ">
            <CgGym
              className=" text-white absolute  right-20 mb-8 mt-4 text-2xl cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="mt-10">
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#Exercise" onClick={() => setToggleMenu(false)}>
                  Exercise
                </a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>

              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#menu">Menu</a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#awards">Login</a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
