import { Link } from "react-router-dom";
import { UserContent } from "../context/userContent";
import { useContext } from "react";

const AdminNavbar = () => {
  const { user } = useContext(UserContent);
  return (
    <div className="bg-lime-800 text-white px-10 py-5 flex items-center justify-between">
      <Link to="/admin" className="font-semibold text-xl">
        Anbu&apos;s Blog! <span className="text-sm">(Admin Panel)</span>
      </Link>
      <ul className="flex space-x-4">
        <li>Welcome {user.userName}</li>
        <li>
          <Link to="/admin/blogs">Manage Blog</Link>
        </li>
        <li>
          <Link to="#">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
