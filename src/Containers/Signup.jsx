import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupComponent = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation checks
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage("Please fill in all the required fields.");
      return;
    }

    try {
      // Make API request to create user
      const response = await axios.post("/api/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      // Check for successful response
      if (response.status === 200) {
        setErrorMessage("");
        // Display success message or perform further actions
        navigate("/login");
      } else {
        setErrorMessage("Error occurred while creating user.");
      }
    } catch (error) {
      setErrorMessage("Error occurred while creating user.");
      // Handle error case
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h1 className="text-2xl text-center font-bold">Signup</h1>
        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-0 text-sm"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            name="lastName"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-0 text-sm"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-0 text-sm"
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
          {/* Render error message */}
          {errorMessage && <p>{errorMessage}</p>}
          <button
            type="submit"
            className="mt-4 px-4 py-3 leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-primary hover:bg-primary-hover focus:bg-primary-active focus:ring-2 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
          >
            Sign Up
          </button>
          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Already have an account?
              <Link className="ml-1 font-medium text-secondary" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
