import { useState } from "react";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h1 className="text-2xl text-center font-bold">Login</h1>
        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-0 text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-0 text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex flex-col items-center mt-4">
            <button
              type="submit"
              className="px-4 py-3 leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-primary hover:bg-primary-hover focus:bg-primary-active focus:ring-2 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
              Login
            </button>
            <Link
              className="mt-2 text-xs font-medium text-primary hover:text-primary-hover focus:text-primary-active"
              to="/signup"
            >
              Create an account
            </Link>
          </div>
          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Forgot your password?
              <Link
                className="ml-1 font-medium text-secondary"
                to="/forgot-password"
              >
                Reset it here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
