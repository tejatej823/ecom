import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
const Signup = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="bg-white shadow-md rounded-lg w-full p-8 border max-w-lg border-black">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Signup
        </h2>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-gray-700 font-medium mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              autoComplete="username"
              value={userForm.username}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:cursor-pointer"
              placeholder="Enter your email address"
              value={userForm.email}
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-700 font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              autoComplete="new-password"
              value={userForm.password}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-gray-700 font-medium mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="confirm password"
              autoComplete="new-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-medium text-lg hover:bg-blue-600 transition"
          >
            Sign up
          </button>
          <pre>
            Already have an account :
            <pre
              className="text-blue-500 underline hover:cursor-pointer"
            >
              Login here
            </pre>
          </pre>
        </form>
      </section>
    </main>
  );
};

export default Signup;
