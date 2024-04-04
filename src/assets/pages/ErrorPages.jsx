import { Link, useRouteError } from "react-router-dom";

const ErrorPages = () => {
   
     const {status,statusText}=useRouteError()
    return (
        <div className=" bg-yellow-500 p-5 text-center text-white">
            <h1 className=" font-bold text-lg ">&#9888; {status} Oops! {statusText}</h1>
            <p>Sorry some thing went Wrong <Link to={'/'} className="underline">You can go back here</Link></p>
        </div>
    )
};

export default ErrorPages;