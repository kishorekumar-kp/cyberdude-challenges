import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const desireList = e.target[0].value;
    e.target.reset();

    if (!desireList) {
      alert("Please write your dream desire");
      return;
    }
    setTodo([...todo, desireList]);

    console.log("form submitted");
  };

  const handleDelete = (index) => {
    const fullTodo = [...todo];
    fullTodo.splice(index, 1);
    setTodo(fullTodo);
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl text-center font-semibold p-1 mb-5 ">
        Desire List
      </h1>
      <div className="bg-medium text-light p-5 ">
        <form className=" flex space-x-8 px-16 py-5" onSubmit={handleSubmit}>
          <input
            type="text"
            className="px-5  outline-none py-1.5 text-xl block w-full text-gray-800"
            placeholder="Enter Your Desire.."
          />
          <button className="p-2 px-4 text-xl bg-extra_dark  rounded hover:bg-dark ">
            Add
          </button>
        </form>
        <div className="mt-10 px-10">
          {todo.map((data, index) => {
            // console.log(data);
            return (
              <div
                key={index}
                className="px-5 py-2 mt-3 text-lg rounded flex justify-between bg-dark"
              >
                <div>{data}</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24"
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(index)}
                  >
                    <path
                      fill="currentColor"
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
                    ></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
