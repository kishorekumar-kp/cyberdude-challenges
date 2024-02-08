import { useState } from "react";
import Form from "../components/Form";
import TextArea from "../components/TextArea";

const FormPage = () => {
  const [Data, setData] = useState({
    fName: "",
    lName: "",
    mobile: "",
    email: "",
    message: "",
  });
  // const [fname, setFname] = useState("");

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData(
      (preData) => ({
        ...preData,
        [name]: value,
      })
      // setData(e.target.value)
    );
  };

  const submitForm = (e) => {
    e.preventDefault();
    setData({
      fName: "",
      lName: "",
      mobile: "",
      email: "",
      message: "",
    });
    console.log(Data);
    alert("Form submitted");
  };
  return (
    <div className="p-5 text-black">
      <h1 className=" p-2 text-2xl text-center font-semibold">Contact Form</h1>
      <div className="max-w-2xl mx-auto bg-dark text-light mt-5">
        <form className="p-10 space-y-3 " onSubmit={submitForm}>
          {/* {console.log(Data)}
          {JSON.stringify(Data)} */}
          <div className="grid grid-cols-2 space-x-5">
            <Form
              name="fName"
              placeholder="Enter First Name"
              label="First Name"
              type="text"
              value={Data.fName}
              required={true}
              handleOnChange={handleInputs}
            />
            <Form
              name="lName"
              placeholder="Enter Last Name"
              label="Last Name"
              value={Data.lName}
              handleOnChange={handleInputs}
              required={true}
              type="text"
            />
          </div>
          <Form
            name="email"
            placeholder="Enter Email ID"
            label="Email Address"
            type="email"
            value={Data.email}
            required={true}
            handleOnChange={handleInputs}
          />
          <Form
            name="mobile"
            placeholder="Enter Mobile No"
            label="Mobile No"
            type="tel"
            value={Data.mobile}
            required={true}
            handleOnChange={handleInputs}
          />
          <TextArea
            name="message"
            placeholder="Enter Message"
            label="Message"
            value={Data.message}
            required={true}
            handleOnChange={handleInputs}
          />
          <div className="pt-5">
            <button className="p-2 text-lg bg-[#C7B7A3] text-black w-full  rounded-lg">
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
