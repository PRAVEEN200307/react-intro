import { useState } from "react";
import PropTypes from "prop-types";

const Accordian = (prop) => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };


  return (
    <div>
      <div
        className=" p-4 bg-gray-200  mt-5 rounded-t cursor-pointer flex justify-between items-center hover:bg-gray-300"
        onClick={handleToggle}
      >
        <h1> {prop.title} </h1>
        <svg
          className={"text-2xl " + (toggleState ? "rotate-90" : "")}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
          ></path>
        </svg>
      </div>
      <div
        className={"border p-4 rounded-b " + (toggleState ? "block" : "hidden")}
      >
        { prop.children? prop.children : prop.desc }
      </div>
    </div>
  );
};

Accordian.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Accordian;
