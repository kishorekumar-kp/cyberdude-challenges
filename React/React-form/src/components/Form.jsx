import propTypes from "prop-types";
const Form = ({
  name,
  placeholder,
  label,
  type,
  handleOnChange,
  value,
  register,
  required,
  error,
}) => {
  // console.log(error);
  return (
    <div>
      <div className="space-y-2">
        <label htmlFor={name} className="text-lg">
          {label}
          {required ? <span className="text-amber-300 ml-1">*</span> : ""}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          className="bg-medium outline-none rounded-md py-1.5 px-3 w-full block placeholder-gray-200 placeholder-opacity-50"
          {...register}
        />
        {error && <small className="text-amber-300">{error.message}</small>}
      </div>
    </div>
  );
};

Form.propTypes = {
  name: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  handleOnChange: propTypes.func,
  register: propTypes.object,
  required: propTypes.bool,
  error: propTypes.object,
};

export default Form;
