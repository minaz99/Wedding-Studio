import React, { useEffect, useState } from "react";
import newlyweds from "../newlyweds.png";
import { useLoginUserMutation } from "../services/api/loginSlice";
import { Spinner } from "react-bootstrap";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, result] = useLoginUserMutation();

  useEffect(() => {
    props.setUserData(result.data);
    props.setIsLoggedIn(result.isSuccess);
  }, [result.isSuccess]);

  return (
    <div className="w-screen bg-amber-50 h-screen p-6 flex  ">
      <div className="bg-blue-200 rounded-xl m-auto h-fit w-fit  p-10 ">
        {result.isLoading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : (
          <div>
            <div className="text-amber-50 tracking-widest underline underline-offset-8 decoration-pink-200 font-extralight text-5xl text-center hover:animate-bounce">
              Wedding Studio
            </div>
            <div className="flex space-x-12 mt-12">
              <div className="justify-center grid mt-20 space-y-8 ">
                <input
                  value={email}
                  className="outline-none w-fit text-xl  rounded-md p-1  text-center border-none hover:bg-gray-300 bg-white"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  value={password}
                  className="outline-none text-xl w-fit rounded-md p-1  text-center border-none hover:bg-gray-300 bg-white"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <div className="space-y-4">
                  <div
                    className="rounded-xl text-center cursor-pointer mx-auto w-48  text-lg bg-pink-300 p-3 hover:bg-pink-400  text-white"
                    onClick={() =>
                      loginUser({ email: email, password: password })
                    }
                  >
                    Login
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
        )}
      </div>
    </div>
  );
}

export default Login;
