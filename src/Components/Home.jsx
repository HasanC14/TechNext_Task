import { useEffect, useState } from "react";
import Loader from "./Loader";
import SingleCard from "./SingleCard";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Home = () => {
  const [Users, setUsers] = useState([]);
  const [SortBy, setSortBy] = useState("firstName");
  const [Loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  const getButtonClass = (criteria) => {
    return SortBy === criteria
      ? "gradient-btn rounded-full px-4"
      : "gradient-btn2 rounded-full px-4";
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = Users.filter((user) => {
    const fullName = user.firstName + " " + user.lastName;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedUsers = filteredUsers.sort((a, b) =>
    SortBy === "company"
      ? a.company.name.localeCompare(b.company.name)
      : a[SortBy].localeCompare(b[SortBy])
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {Loading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="flex md:justify-between justify-center items-center md:flex-row flex-col py-4">
            {/* Button and Title */}
            <div>
              {/* Title */}
              <div className="text-4xl font-semibold mb-4  gradient-text2">
                Existing Users
              </div>
            </div>
            <div className="relative space-y-4">
              <div>
                <input
                  type="text"
                  className="rounded-full w-full h-8 p-2 text-sm"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search by name"
                />
                <button className="absolute top-2 right-2 ">
                  <FaMagnifyingGlass />
                </button>
              </div>
              {/* Sorting Buttons */}
              <div className="space-x-4">
                <button
                  className={getButtonClass("firstName")}
                  onClick={() => setSortBy("firstName")}
                >
                  Name
                </button>
                <button
                  className={getButtonClass("email")}
                  onClick={() => setSortBy("email")}
                >
                  Email
                </button>
                <button
                  className={getButtonClass("company")}
                  onClick={() => setSortBy("company")}
                >
                  Company
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {sortedUsers.map((user) => (
              <SingleCard key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
