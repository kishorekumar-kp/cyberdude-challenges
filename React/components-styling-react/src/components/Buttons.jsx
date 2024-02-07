import propTypes from "prop-types";
const Buttons = (props) => {
  return (
    <div>
      <div>
        <button
          className="px-3 py-2 text-lg  bg-blue-400 rounded-xl w-full"
          style={{ backgroundColor: props.variant.colour, color: props.variant.textClr}}
        >
          {props.variant.title}
        </button>
      </div>
    </div>
  );
};
Buttons.propTypes = {
  variant: propTypes.object,
};
export default Buttons;
