import { UserContent } from "../context/userContent";
import { useContext } from "react";

const AdminSidebar = () => {

  const {user} = useContext(UserContent);
   
  return (
    <div className="bg-white  px-10 py-5 flex items-center justify-between">
       <h1>side navbar hello {user.userName} </h1>
    </div>
  );
};

export default AdminSidebar;