import propTypes from "prop-types";

const Alert = (props) => {
  return (
    console.log(props.variant),
    (
      <div>
        <div
          className="p-5 rounded space-y-2 "
          style={{ backgroundColor: props.variant.colour , color: props.variant.textClr}}
        >
          <p className="text-center text-2xl">{props.variant.title}</p>
          <p className="text-center ">{props.variant.text}</p>
        </div>
      </div>
    )
  );
};
Alert.propTypes = {
  variant: propTypes.object,
};

export default Alert;