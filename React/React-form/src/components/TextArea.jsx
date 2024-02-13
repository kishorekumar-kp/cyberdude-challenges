import propTypes from "prop-types";
const TextArea = ({ name, placeholder, label, value, handleOnChange ,register,required,
  error, }) => {
  return (
    <div>
      <div className="space-y-2">
        <label htmlFor={name} className="text-lg">
          {label}
          {required ? <span className="text-amber-300 ml-1">*</span> : ""}
        </label>
        <textarea
          id={name}
          name={name}
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          {...register}
          className="w-full block bg-medium outline-none rounded-md px-3 py-1.5 placeholder-gray-200 placeholder-opacity-50"
        ></textarea>
        {error && <small className="text-amber-300">{error.message}</small>}
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
  register:propTypes.object,
  required: propTypes.bool,
  error:propTypes.object,
};
export default TextArea;
