import { IoBookSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const dispatch=useDispatch();
  const toggleopen = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav className="sticky top-0 flex justify-between border-2 z-100">
        <div className="flex m-1 text-blue-500">
          <IoBookSharp className="item-center text-4xl m-1" />
          <div className="text-3xl">BOOK BAZAR</div>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-1 px-4 rounded-lg transition-all duration-300 ${
                isActive ? "bg-black text-white" : "bg-white text-black"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `py-1 px-4 rounded-lg transition-all duration-300 ${
                isActive ? "bg-black text-white" : "bg-white text-black"
              }`
            }
          >
            Books store
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-1 px-4 rounded-lg transition-all duration-300 ${
                isActive ? "bg-black text-white" : "bg-white text-black"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `py-1 px-4 rounded-lg transition-all duration-300 text-white ${
                isActive ? "bg-black" : "bg-blue-400"
              }`
            }
          >
            Get Started
          </NavLink>
        </div>
        <div className="text-4xl m-1 text-blue-500 flex gap-6 z-100">
          <div className="lg:hidden">
            {isOpen ? (
              <GiCrossMark onClick={toggleopen} />
            ) : (
              <GiHamburgerMenu onClick={toggleopen} />
            )}
          </div>
          <div>
            <NavLink to="/profile">
              <CgProfile />
            </NavLink>
          </div>
          <div>
            <NavLink to="/cart">
              <FaCartArrowDown onClick={() => setisOpen(false)} />
            </NavLink>
          </div>
        </div>

        <div
          className={`lg:hidden w-[75%] md:w-[50%] h-full fixed top-14 z-100 transition-transform duration-500 ease-in-out bg-blue-200 ${
            isOpen ? "translate-x-0" : "translate-x-[-105%]"
          } border border-black rounded-lg`}
        >
          <ul className="flex flex-col text-center pt-9 z-100">
            <li className="p-4 text-lg">
              <NavLink
                to="/"
                onClick={toggleopen}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white p-1 border rounded-lg"
                    : "bg-white text-black p-1 border rounded-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="p-4 text-lg">
              <NavLink
                to="/books"
                onClick={toggleopen}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white p-1 border rounded-lg"
                    : "bg-white text-black p-1 border rounded-lg"
                }
              >
                Books
              </NavLink>
            </li>
            <li className="p-4 text-lg">
              <NavLink
                to="/about"
                onClick={toggleopen}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white p-1 border rounded-lg"
                    : "bg-white text-black p-1 border rounded-lg"
                }
              >
                About
              </NavLink>
            </li>
            <li className="p-4 text-lg">
              <NavLink
                to="/login"
                onClick={toggleopen}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white p-1 border rounded-lg"
                    : "bg-blue-300 text-white p-1 border rounded-lg"
                }
              >
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
