import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../components/Logo";
import MainButton from "../components/MainButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex">
        <div className="bg-gradient-to-br from-main-end to-main-start rounded-l-2xl flex items-center h-auto w-auto">
          <img
            src="public/women_login.png"
            alt="women_login"
            className="h-96 w-auto"
          />
        </div>
        <div className="bg-white p-6 rounded-r-2xl flex flex-col justify-center shadow-lg">
          <div className="flex flex-col items-center">
            <Logo />
            <p className="text-gray-normal text-sm mb-6 mt-4">
              Hi, welcome back!
            </p>
          </div>
          <button className="bg-gray-100 text-gray-main py-2 px-4 rounded-full mb-4 flex items-center justify-center text-sm">
            <img
              src="public/google 1.png"
              alt="Google logo"
              className="h-5 w-5 mr-2"
            />
            Log in with Google
          </button>
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-4 text-gray-600">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded-full py-2 px-4 mb-4 w-full text-sm  focus:outline-none focus:border-main-start focus:ring-1 focus:ring-main-start "
          />
          <MainButton>
            Send Magic Link <FontAwesomeIcon icon={faArrowRight} />
          </MainButton>
          <div className="text-center mt-6 text-sm">
            <p className="text-gray-normal">
              Not registered yet?{" "}
              <a
                href="#"
                className="bg-gradient-to-r from-main-start to-main-end text-transparent bg-clip-text font-medium "
              >
                Create an Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
