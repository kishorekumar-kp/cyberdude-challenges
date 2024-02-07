import { Link } from "react-router-dom";
const TheNavbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-40 py-2 bg-clr-medium">
        <h1 className="text-2xl font-semibold p-2 ">Style-components</h1>
        <ul className="flex space-x-10 text-lg items-center">
          <li className="hover:text-clr-dark font-medium">
            <Link to={"/"}> Accordion</Link>
          </li>
          <li className="hover:text-clr-dark font-medium">
            <Link to={"/alert"}> Alert</Link>
          </li>
          <li className="hover:text-clr-dark font-medium">
            <Link to={"/buttons"}> Buttons</Link>
          </li>
          <li className="hover:text-clr-dark font-medium">
            <Link to={"/card"}>Card</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheNavbar;