import { useState } from "react";

const ChatPage = () => {
  const [time, setTime] = useState("12:00");
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const [date, setDate] = useState("2024-02-29");
  const handleDate= (e) => {
    setDate(e.target.value);
  };

  const [name, setName] = useState("Spiderman");
  const handleName= (e) => {
    setName(e.target.value);
  };

  const [message1, setMessage1] = useState("Message");
  const handleMessage1= (e) => {
    setMessage1(e.target.value);
  };

  const [message2, setMessage2] = useState("Message");
  const handleMessage2= (e) => {
    setMessage2(e.target.value);
  };
  const [network, setnetwork] = useState("Airtel");
  const handlenetwork= (e) => {
    setnetwork(e.target.value);
  };
  
  return (
    <>
      <header className="px-52 bg-[#294B29] text-white">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-2xl font-semibold  text-center">
            Fake-Live-chat
          </h1>
          <a href="https://github.com/kishorekumar-kp"  rel="noreferrer" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
            className="items-center "
          >
            <path
              fill="currentColor"
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"
            />
          </svg>
          </a>
        </div>
      </header>
      <main className="px-52 mt-20 flex space-x-10 ">
        <div className="w-1/3 bg-[#789461] text-white space-y-5 px-5 py-10 ">
          <div className="flex space-x-5">
            <div className="space-y-3 px-3">
              <label htmlFor="time" className=" ">
                Time :
              </label>
              <input
                type="time"
                id="time"
                className="rounded p-1 text-gray-800"
                placeholder="Enter Time"
                onChange={handleTime}
              />
            </div>

            <div className="space-y-3 px-3">
              <label htmlFor="time" className=" ">
                Date:
              </label>
              <input
                type="date"
                id="time"
                className="rounded p-1 text-gray-800"
                placeholder="Enter Time"
                onChange={handleDate}

              />
            </div>
          </div>

          <div className="py-5 px-3 ">
            <label htmlFor="network">Network provider :</label>
            <select name="" id="network" className="p-1 rounded text-black" onChange={handlenetwork}>
              <option value="">--Select network --</option>
              <option value="Airtel">Airtel</option>
              <option value="Jio">Jio</option>
              <option value="Vi">Vi</option>
            </select>
          </div>

          <div className="px-3 flex flex-col space-y-2">
            <label htmlFor="name">Direct message with:</label>
            <input
              type="text"
              id="name"
              className="rounded p-1 text-gray-800"
              placeholder="Enter Name here"
              onChange={handleName}
            />
          </div>

          <div className="p-3 flex flex-col space-y-2">
            <label htmlFor="message">Person 1 message:</label>
            <textarea
              type="text"
              id="message"
              className="rounded p-1 text-gray-800"
              placeholder="Enter Message here"
              onChange={handleMessage1}
            />
          </div>
          <div className="p-3 flex flex-col space-y-2">
            <label htmlFor="message">Person 2 message:</label>
            <textarea
              type="text"
              id="message"
              className="rounded p-1 text-gray-800"
              placeholder="Enter Message here"
              onChange={handleMessage2}
            />
          </div>
        </div>
        <div className="w-2/3 bg-gray-200 border-2 border-emerald-950 shadow-2xl">
          <h4 className="p-2 text-center text-xl font-semibold text-gray-800">
            Live Preview
          </h4>
          <div className="max-w-xs  mx-auto bg-slate-100 shadow-lg border border-emerald-950">
            <div className="flex justify-between items-center px-2 py-1">
              <p>{time}</p>
              <ul className="flex space-x-1 items-center ">
                <li>{network}</li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M428.4 27.8v456.4h60.9V27.8zM327 168.2v316h60.8v-316zM225.4 273.6v210.6h61V273.6zM124 343.8v140.4h60.9V343.8zM22.67 394.9v89.3h60.84v-89.3z"
                    />
                  </svg>
                </li>
                <li className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillOpacity=".3"
                      d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10z"
                    />
                    <path
                      fill="currentColor"
                      d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div className=" p-2  bg-green-800 text-white flex justify-between">
              <div className="flex space-x-3  items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.CyBrfBzzUALapGKln4UXaQHaEL?w=624&h=352&rs=1&pid=ImgDetMain"
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col ">
                  <p className="text-left text-sm">{name ? name : "Spider Man"}</p>
                  <p className="text-left text-xs">online</p>
                </div>
              </div>

              <ul className="flex space-x-3 items-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.096 19q-.69 0-1.153-.462t-.462-1.153V6.615q0-.69.462-1.152Q4.406 5 5.096 5h10.77q.69 0 1.152.463t.463 1.152v4.654l3.038-3.038v7.538l-3.038-3.038v4.654q0 .69-.463 1.152q-.462.463-1.153.463z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0"
                    />
                  </svg>
                </li>
              </ul>
            </div>

            <div className="h-96 bg-[#fcfbe7]">
              <div className="pt-3">
              <p className="text-center p-1 text-sm w-24 rounded-2xl mx-auto bg-red-100">{date}</p>
              </div>
              <div className="flex flex-col px-5 py-2 space-y-5">
              <div  className="mr-12 h-20 bg-white text-gray-700 justify-start">{message1 ? message1 : "Type your message"}</div>
              <div  className="ml-12 h-20  bg-white text-gray-700 justify-end">{message2 ? message2 : "Type your message"}</div>

              </div>
              
            </div>

            <div className=" px-3 py-2 bg-[#fcfbe7]">
              <div className="flex items-center bg-slate-200 p-1 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <circle cx="15.5" cy="9.5" r="1.5" fill="currentColor" />
                  <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
                  <path
                    fill="currentColor"
                    d="M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4"
                  />
                  <path
                    fill="currentColor"
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Message"
                  className="block p-1 px-5 rounded-xl bg-slate-200"
                />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChatPage;
