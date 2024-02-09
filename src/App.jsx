import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fetch Failed");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {users.map((user) => (
          <div
            key={user?.id}
            className=" rounded-lg shadow-md p-6 bg_glass custom-border"
          >
            {/* Image */}
            <img
              src={user?.image}
              alt={`${user?.firstName} ${user?.lastName}`}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            {/* Name */}
            <div className="text-lg font-semibold text-center mb-2">
              {user?.firstName} {user?.lastName}
            </div>
            {/* Email */}
            <div className="text-sm text-gray-600 text-center mb-2">
              {user?.email}
            </div>
            {/* Address */}
            <div className="text-sm text-gray-600 mb-2">
              Address: {user?.address.address}, {user?.address.city}
            </div>
            {/* Company */}
            <div className="text-sm text-gray-600">
              Company: {user?.company.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
