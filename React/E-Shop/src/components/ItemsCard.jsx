import { useState } from "react";
import propTypes from "prop-types";
const ItemsCard = ({
  brand,
  type,
  price,
  img,
}) => {
  console.log(brand, type, price, img);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevalue) => {
      if (prevalue === 10) {
        return prevalue;
      } else return prevalue + 1;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prevalue) => {
      if (prevalue > 1) {
        return prevalue - 1;
      } else return (prevalue = 1);
    });
  };

  return (
    <div className="">
      <div className="">
        <div className="bg-normal mx-auto  max-w-52 flex flex-col p-5 px-10 mt-5">
          <div className="flex items-center justify-center">
            <img src={img} alt="image" className="w-44 h-52 " />
          </div>
          <div className="flex flex-col items-center">
            <h4 className="m-1">{brand}</h4>
            <p className="m-1">{type}</p>
            <div className="flex">
              <p className="m-1">Price :</p>
              <p className="m-1">₹ {price}</p>
              {/* <p>total price :{setPrice()}</p> */}
            </div>
            <div className="flex items-center py-2">
              <p className="m-0 p-2">Quantity :</p>
              <div className="flex gap-1">
                <button
                  onClick={decrementQuantity}
                  className="px-2 py-1 w-7 text-center flex items-center bg-dark  text-xl"
                >
                  -
                </button>
                <div className="flex items-center bg-dark w-10 justify-center">
                  {quantity}
                </div>
                <button
                  onClick={incrementQuantity}
                  className="px-2 py-1 w-7 flex items-center bg-dark text-xl"
                >
                  +
                </button>
              </div>
            </div>
              <p className=" text-xl font-semibold p-0.5">Total price :{price*quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemsCard.propTypes = {
  brand: propTypes.string,
  price: propTypes.number,
  type: propTypes.string,
  img: propTypes.string,
};

export default ItemsCard;
