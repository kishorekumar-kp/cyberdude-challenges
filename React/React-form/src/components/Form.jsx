import propTypes from "prop-types"
const Form = ({ name, placeholder, label ,type ,handleOnChange ,value ,required }) => {
  return (
    <div>
      <div className="space-y-2">
        <label htmlFor={name} className="text-lg">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          required={required}
          className="bg-medium outline-none rounded-md py-1.5 px-3 w-full block placeholder-gray-200 placeholder-opacity-50"
        />
      </div>
    </div>
  );
};

Form.propTypes={
    name:propTypes.string,
    placeholder:propTypes.string,
    label:propTypes.string,
    type:propTypes.string,
    value:propTypes.string,
    handleOnChange:propTypes.func,
    required:propTypes.bool,
}

export default Form;
