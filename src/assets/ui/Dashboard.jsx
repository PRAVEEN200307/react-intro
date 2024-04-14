import { UserContent } from "../context/userContent";
import { useContext } from "react";

const DashboardPage = () => {
  const { user, setUser } = useContext(UserContent);

  return (
    <div className="space-y-4">
      Dashboard for Mr. {user.userName}! <br />
      <button
        className="px-4 py-3 bg-violet-700 rounded text-white"
        onClick={() => {
          setUser({ ...user, userName: "Praveen" });
          console.log(user);
        }}
      >
        Login praveen
      </button>
    </div>
  );
};

export default DashboardPage;
