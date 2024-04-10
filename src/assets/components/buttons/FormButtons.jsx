import PropTypes from "prop-types";

const FormButtons = (props) => {
  return (
    <button className=" bg-orange-800 px-4 py-2 rounded text-white hover:bg-orange-600">
      {props.text}
    </button>
  );
};
FormButtons.propTypes = {
  text: PropTypes.string,
};

export default FormButtons;
