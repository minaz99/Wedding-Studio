import React, { useEffect, useState } from "react";
import juliaLogo from "../juliaLogo.jpg";
import juliaLogo2 from "../juliaLogo2.png";
import { useLoginUserMutation } from "../services/api/loginSlice";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, result] = useLoginUserMutation();
  const [id, setID] = useState("");
  const clickBtn = (name) => {
    loginUser(name);

    //alert(Object.keys(result));
    // alert(result.status);
  };

  useEffect(() => {
    if (result.status === "fulfilled") setID(result.data.title);
  }, [result.status]);

  return (
    <div className="w-screen bg-amber-50 h-screen p-12 ">
      <div className="bg-blue-200 rounded-xl w-fit mx-auto p-20 ">
        <div className="text-amber-50 tracking-widest underline underline-offset-8 decoration-pink-200 font-extralight text-5xl text-center hover:animate-bounce">
          Julia Studio {id}
        </div>
        <div className="flex space-x-12 mt-12">
          <div className="justify-center grid mt-20 space-y-8 ">
            <input
              value={email}
              className="outline-none w-fit text-xl  rounded-md p-1  text-center border-none hover:bg-gray-300 bg-white"
              onChange={(e) => setEmail(e.value)}
              type="email"
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              className="outline-none text-xl w-fit rounded-md p-1  text-center border-none hover:bg-gray-300 bg-white"
              onChange={(e) => setPassword(e.value)}
              placeholder="Password"
            />
            <div className="space-y-4">
              <div
                className="rounded-xl text-center cursor-pointer mx-auto w-48  text-lg bg-pink-300 p-3 hover:bg-pink-400  text-white"
                onClick={() => clickBtn(email)}
              >
                Login
              </div>
              <div className="underline text-center cursor-pointer text-blue-500 hover:text-blue-700">
                Forgot Password
              </div>
            </div>
          </div>

          <img
            src={juliaLogo2}
            alt="logo"
            width={350}
            height={100}
            className="rounded-3xl hover:animate-pulse  "
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
