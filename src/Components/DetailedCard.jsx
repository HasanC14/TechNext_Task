import { Link, useLoaderData } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
const DetailedCard = () => {
  const user = useLoaderData();

  return (
    <div className="w-full flex justify-center items-center h-screen p-10 ">
      <div className="w-[60rem] rounded-lg md:p-6 p-1  flex justify-center items-center  md:flex-row md:space-x-10 space-x-0 flex-col space-y-10 md:space-y-0 relative">
        <Link to={"/"} className="absolute inset-0 text-white text-4xl">
          <FaCircleArrowLeft />
        </Link>
        <div className=" flex justify-center items-center">
          {/* Image */}
          <img
            src={user?.image}
            alt={`${user?.firstName} ${user?.lastName}`}
            className="w-72 h-72 bg_glass p-10 hover:scale-105 transition-all ease-in-out duration-700 custom-border"
          />
        </div>

        <div className=" space-y-2 ">
          {/* Name */}
          <div className="text-3xl md:text-4xl gradient-text font-semibold ">
            {user?.firstName} {user?.lastName}
          </div>
          {/* Email */}
          <div className="text-md gradient-text2  mb-2">{user?.email}</div>
          {/* Address */}
          <div className="text-gray-400 text-xl">
            {user?.address.address}, {user?.address.city}
          </div>
          {/* Company */}
          <div className="text-gray-500 text-xl "> {user?.company.name}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
