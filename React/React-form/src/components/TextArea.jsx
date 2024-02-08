import propTypes from "prop-types";
const TextArea = ({ name, placeholder, label, value, handleOnChange ,required }) => {
  return (
    <div>
      <div className="space-y-2">
        <label htmlFor={name} className="text-lg">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          required={required}
          className="w-full block bg-medium outline-none rounded-md px-3 py-1.5 placeholder-gray-200 placeholder-opacity-50"
        ></textarea>
      </div>
    </div>
  );
};
TextArea.propTypes = {
  name: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  handleOnChange: propTypes.func,
  required:propTypes.bool,
};
export default TextArea;
