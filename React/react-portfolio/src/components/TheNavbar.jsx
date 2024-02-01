// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div className=" bg-dark text-white flex justify-between py-4 px-52">
      <h1 className="text-xl font-bold">Kishore-Blogs</h1>
      <ul className="flex space-x-10 ">
        <li className=" cursor-pointer hover:text-normal">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" cursor-pointer hover:text-normal">
          <Link to={"/about"}>About</Link>
        </li>
        <li className=" cursor-pointer hover:text-normal">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;