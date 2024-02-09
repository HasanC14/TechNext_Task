import { useEffect, useState } from "react";
import Loader from "./Loader";
import SingleCard from "./SingleCard";

const Home = () => {
  const [Users, setUsers] = useState([]);
  const [SortBy, setSortBy] = useState("firstName");
  const [Loading, setLoading] = useState(true);
  const HandleSort = (name) => {
    setSortBy(name);
  };
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

  return (
    <div className="container mx-auto px-4 py-8">
      {Loading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="flex md:justify-between justify-center items-center md:flex-row flex-col">
            <div className="text-4xl font-semibold mb-4  gradient-text2">
              Existing Users
            </div>
            <div className="space-x-4">
              <button
                className="gradient-btn2 rounded-full px-4"
                onClick={() => HandleSort("firstName")}
              >
                Name
              </button>
              <button
                className="gradient-btn2 rounded-full px-4"
                onClick={() => HandleSort("email")}
              >
                Email
              </button>
              <button
                className="gradient-btn2 rounded-full px-4"
                onClick={() => HandleSort("company")}
              >
                Company
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {Users.sort((a, b) =>
              SortBy === "company"
                ? a.company.name > b.company.name
                  ? 1
                  : -1
                : a[SortBy] > b[SortBy]
                ? 1
                : -1
            ).map((user) => (
              <SingleCard key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
