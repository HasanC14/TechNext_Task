import { Link } from "react-router-dom";

const SingleCard = ({ user }) => {
  console.log(user.id);
  return (
    <Link to={`/user/${user?.id}`}>
      <div className="lg:h-64 h-80 rounded-lg shadow-md p-6 bg_glass custom-border flex justify-center items-center  lg:flex-row lg:space-x-10 space-x-0 flex-col hover:scale-105 transition-all ease-in-out duration-700 text-center lg:text-left">
        <div className="lg:w-1/3 w-full flex justify-center items-center">
          {/* Image */}
          <img
            src={user?.image}
            alt={`${user?.firstName} ${user?.lastName}`}
            className="w-28 h-28 grayscale hover:grayscale-0 transition-all ease-in-out duration-700"
          />
        </div>

        <div className=" space-y-2 lg:w-2/3 w-full">
          {/* Name */}
          <div className="text-lg md:text-2xl gradient-text font-semibold ">
            {user?.firstName} {user?.lastName}
          </div>
          {/* Email */}
          <div className="text-sm gradient-text2  mb-2">{user?.email}</div>
          {/* Address */}
          <div className="text-gray-400 text-md md:text-lg">
            {user?.address.address}, {user?.address.city}
          </div>
          {/* Company */}
          <div className="text-gray-500 text-md md:text-lg ">
            {" "}
            {user?.company.name}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
