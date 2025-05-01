import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error from "../../assets/errornew.json";

const ErrorPage = () => {
  return (
    <div>
      <div className=" container font-bold mx-auto text-4xl text-white mt-10">
        There was a problem{" "}
        <span className="text-orange-500">Go back to Home</span> <br />
        <Link to="/">
          <button className="btn rounded-xl py-3 px-5 text-white bg-blue-800">
            Return Home
          </button>
        </Link>
      </div>

      <div className=" flex justify-center items-center ">
        <div className="flex justify-center items-center h-[100vh]">
          <Lottie animationData={error} />{" "}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
