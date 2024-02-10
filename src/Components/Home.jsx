import AddUser from "./AddUser";
import ExistingUser from "./ExistingUser";

const Home = () => {
  return (
    <div className="space-y-5 my-10">
      <AddUser></AddUser>
      <ExistingUser></ExistingUser>
    </div>
  );
};

export default Home;
