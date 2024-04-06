import { Link } from "react-router-dom";

function NavBar(){
    return(
       <div  className="bg-blue-500 px-10 py-5 text-white ">
          <ul className="flex justify-between">
             <li className=" font-bold text-lg ">React js</li>
             <div className="flex gap-10 ">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                   <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link to={'/followers'}>Followers</Link>
                </li>
             </div> 
          </ul>
       </div>
    )
}

export default NavBar;