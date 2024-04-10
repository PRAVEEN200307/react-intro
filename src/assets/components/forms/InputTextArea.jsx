import PropTypes from "prop-types";

const InputTextArea = ({
  id,
  label,
  formName,
  placeHolder,
  handleOnchange,
  value,
  name,
  required,
}) => {
  return (
    <div>
      <label htmlFor={formName} className="block mb-2">
        {label} {required ? <span className="text-red-600">*</span> : ""}
      </label>
      <textarea
        name={name}
        id={id}
        value={value}
        placeholder={placeHolder}
        className="bg-gray-200 block px-4 py-2 rounded outline-none w-full"
        onChange={handleOnchange}
        required={required}
      ></textarea>
    </div>
  );
};

InputTextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  formName: PropTypes.string,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  handleOnchange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
};

export default InputTextArea;
