import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../context/useAuth";
import { object, string } from "yup";

const SignIn = () => {
  const { loginGoogleUser, loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const schema = object().shape({
    email: string().email("Invalid email").required("Email is required"),
    password: string().required("Password is required"),
  });

  const validate = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true; 
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    if (await validate()) {
      loginUser(auth, formData.email, formData.password);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="py-20 mt-[40px]">
      <div className="flex h-full items-center justify-center">
        <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4">
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
              <form className="flex flex-col gap-4 pb-4" onSubmit={signIn}>
                <h1 className="mb-4 text-2xl font-bold dark:text-white">
                  Login
                </h1>
                <div>
                  <div className="mb-2">
                    <label
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        className={`block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required=""
                      />
                    </div>
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <div className="mb-2">
                    <label
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        className={`block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required=""
                      />
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                  <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">
                    Forgot password?
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                  >
                    <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                      Login
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={loginGoogleUser}
                    className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                  >
                    <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 48 48"
                        enableBackground="new 0 0 48 48"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG path */}
                      </svg>
                      Sign in with Google
                    </span>
                  </button>
                </div>
              </form>
              <div className="min-w-[270px]">
                <div className="mt-4 text-center dark:text-gray-200">
                  New user?
                  <a
                    className="text-blue-500 underline hover:text-blue-600"
                    href="/signup"
                  >
                    Create account here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
