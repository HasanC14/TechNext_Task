import React, { useState } from "react";
import { FaImages } from "react-icons/fa6";

const AddUser = () => {
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [preview, setPreview] = useState("");

  const userDetails = {
    avatar,
    name: firstName + " " + lastName,
    email,
    address,
    companyName,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 rounded-lg overflow-hidden  p-6 ">
      <h2 className="text-4xl font-semibold mb-4  gradient-text2">
        Add User Details
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 grid-cols-1 gap-4"
      >
        {/* firstName */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none bg_glass border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        {/* lastName */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none bg_glass border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none bg_glass border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* companyName */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="shadow appearance-none bg_glass border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        {/* Address */}
        <div className="mb-4 md:col-span-2 col-span-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            className="shadow appearance-none bg_glass border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Street, Suite, City"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Avatar */}
        <div className="relative mb-4 ">
          <input
            className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
          />
          <div className="bg_glass border border-gray-300 rounded-md p-2 flex items-center justify-between">
            <span className="text-gray-600 truncate">
              {avatar ? avatar.name : "Choose a file"}
            </span>
            <button
              className="text-sm gradient-text2 "
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("avatar").click();
              }}
            >
              Browse
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex justify-center items-center">
          {preview ? (
            <img
              className="w-28 h-28 mb-4 rounded-lg "
              src={preview}
              alt="Avatar Preview"
            />
          ) : (
            <>
              <FaImages className="text-4xl text-white" />
            </>
          )}
        </div>

        {/* Button */}
        <div className="gradient-btn rounded md:col-span-2 col-span-0">
          <button className=" font-bold py-2 px-4  w-full" type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
