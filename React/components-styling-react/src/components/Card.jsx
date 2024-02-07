import propTypes from "prop-types";
const Card = (props) => {
  return (
    <div>
      <div className=" px-5 py-3" style={{ backgroundColor: props.variant.colour , color: props.variant.textClr}}>
        <p className="text-xl py-3 underline text-center">{props.variant.title}</p>
        <div className="space-y-1">
          <h3 className="text-lg">{props.variant.title} card title</h3>
          <p className="text-sm">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  variant: propTypes.object,
};
export default Card;
