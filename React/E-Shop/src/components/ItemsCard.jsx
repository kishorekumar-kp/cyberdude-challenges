import { useState } from "react";
const price = 2000;
const ItemsCard = () => {
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

  // const setPrice = () => {
  //   return price * quantity;
  // };
  return (
    <div>
      <div className="bg-normal mx-auto max-w-52 flex flex-col p-10">
        <div className="flex items-center justify-center">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/w/r/g/l-pcb-01-marmic-fab-original-imagwhysn2gsccxf.jpeg?q=70"
            alt="img"
            className="w-44 h-52 "
          />
        </div>
        <div className="flex flex-col items-center">
          <h4 className="m-1">American Eagle</h4>
          <p className="m-1">Men&apos;s regular fit</p>
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
              {/* <input type="" className="w-7 h-7 items-center" value={1} /> */}
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
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
