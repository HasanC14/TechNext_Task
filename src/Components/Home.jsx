import { useEffect, useState } from "react";
import Loader from "./Loader";
import SingleCard from "./SingleCard";

const Home = () => {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
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
          <h1 className="text-4xl font-semibold mb-4  gradient-text2">
            User List
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {Users.map((user) => (
              <SingleCard key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
