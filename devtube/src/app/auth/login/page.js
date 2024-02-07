"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import Validation from "../signup/Validation";

import { setStorage } from "@/app/GlobalRedux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useLoginMutation, useRefreshMutation } from "@/app/GlobalRedux/slices/tokenApiSlice";

const LoginPage = () => {
  // **loginDetails states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);

  // **Toggling to see password
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // **redirection
  const router = useRouter();

  // **state(+localstorage) modification and rtkquery
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [refresh] = useRefreshMutation();

  // **Form error checking(Validation)
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // **Refreshing access token every 4 mins ->to be moved
  useEffect(() => {
    const refreshAccessToken = async () => {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const refreshToken = {
        refresh: tokens.refresh,
      };

      try {
        const response = await refresh(refreshToken).unwrap();
        const newTokens = { ...refreshToken, ...response };
        dispatch(setStorage(newTokens));
      } catch (err) {
        console.log(err);
      }
    };

    const intervalId = setInterval(refreshAccessToken, 4 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  // **Form on submit =>check validity,making requests
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = { email, password };
    setErrors(Validation(loginDetails));
    const isValid = Object.keys(errors).length === 0;
    setIsFormValid(isValid);
    setIsloading(true);

    if (isFormValid) {
      try {
        const response = await login(loginDetails).unwrap();
        dispatch(setStorage({ ...response }));
        console.log(response);
        router.push("/");
      } catch (err) {
        console.error(err);
      } finally {
        setIsloading(false);
      }
    }
  };

  return (
    <div className="mt-10">
      <p className="text-center font-inter text-black text-2xl font-semibold">
        LOGIN
      </p>

      <form
        onSubmit={handleSubmit}
        className="inline-flex flex-col items-start gap-4 "
      >
        <div className="input">
          <label className="">Email</label>
          <input
            className=""
            type="text"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.email && (
            <p className="text-red-600 text-left">{errors.email}.</p>
          )}
        </div>

        <div className="input relative">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-1xl absolute top-11 right-5">
            {showPassword === false ? (
              <HiEyeOff onClick={handleShowPassword} />
            ) : (
              <HiEye onClick={handleShowPassword} />
            )}
          </span>
        </div>

        <button disabled={isloading} className="primary-btn-large">
          {isloading ? <span>LOADING...</span> : <span>LOGIN</span>}
        </button>
        <p>
          Don't have an account?
          <Link
            className="text-[color:var(--secondary-text)]"
            href={"./signup"}
          >
            sign up
          </Link>
        </p>
        <Link href={"#"} className="text-[color:var(--secondary-text)]">
          Forgot password?
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;

// *Todos =>
// * - Replace with actual  in tokenSlice
// ?Whitespaces in email
// ?Why the error
// ?Can we use just the local storage instead of both => yes? remove state
// ?How can we make the refresh function run on every page istead of only
// ?Configured with email and not user name
