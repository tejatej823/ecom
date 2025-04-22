import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUserData] = useState({ username: "", password: "" });
  const handle_register = () => {
    navigate("/signup");
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const users=JSON.parse(localStorage.getItem("users"));
    console.log(users);
    const founduser=users.find(person=>person.username===user.username);
    console.log("found user:",founduser)
    if(founduser.password===user.password){
      alert("successful login")
      
    }
    else{
      alert("unsuccessfull login")
    }

  };
  const handleonchange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="bg-white shadow-md rounded-lg w-full mx-6 sm:max-w-lg p-8 border border-black">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Login
        </h2>
        <form className="space-y-6" onSubmit={handlesubmit}>
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
              onChange={handleonchange}
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              onChange={handleonchange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-medium text-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <pre>
            Dont have an account :
            <pre
              onClick={handle_register}
              className="text-blue-500 underline hover:cursor-pointer"
            >
              register here
            </pre>
          </pre>
        </form>
      </section>
    </main>
  );
};

export default Login;
