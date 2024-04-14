import { Outlet } from "react-router-dom";
import AdminSidebar from "../ui/AdminSidebar";
import AdminNavbar from "../ui/Adminnavbar";
import { UserContent } from "../context/userContent";
import { useState } from "react";
// import { BlogContext } from "../contexts/BlogContext";

const AdminLayout = () => {
  const [user,setUser] = useState({
    userId: 1,
    userName: "Selvan",
    isLoggedIn: true,
  });

  //   const [posts, setPosts] = useState([]);
  return (
    <div className="bg-gray-300 min-h-screen pb-10">
      {/* <UserContext.Provider value={{ user, setUser }}> */}
      <UserContent.Provider value={ {user,setUser} }>
        {/* <BlogContext.Provider value={{ posts, setPosts }}> */}
        <AdminNavbar />

        <div className="flex m-5 space-x-10">
          <div className="w-1/4">
            <AdminSidebar></AdminSidebar>
          </div>

          <div className="w-3/4 bg-white p-10 rounded">
            <Outlet />
          </div>
        </div>
        {/* </BlogContext.Provider> */}
      </UserContent.Provider>
    </div>
  );
};

export default AdminLayout;
