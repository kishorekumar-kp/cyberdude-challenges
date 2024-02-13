import Form from "../components/Form";
import TextArea from "../components/TextArea";
import { useForm } from "react-hook-form";

const FormPageByHook = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // console.log(useForm());

  const sendInfo = (data) => {
    console.log("Getting values from form submit: ", data);
  };

  return (
    <div className="p-5 text-black">
      <h1 className=" p-2 text-2xl text-center font-semibold">Contact Form</h1>
      <div className="max-w-2xl mx-auto bg-dark text-light mt-5">
        <form className="p-10 space-y-3 " onSubmit={handleSubmit(sendInfo)}>
          {/* {console.log(Data)}
          {JSON.stringify(Data)} */}
          <div className="grid grid-cols-2 space-x-5">
            <Form
              name="fName"
              placeholder="Enter First Name"
              label="First Name"
              type="text"
              register={register("fName", {
                required: "This filed is required",
              })}
              error={errors.fName}
              required
            />
            <Form
              name="lName"
              placeholder="Enter Last Name"
              label="Last Name"
              type="text"
              register={register("lName", {
                required: "This filed is required",
              })}
              error={errors.lName}
              required
            />
          </div>
          <Form
            name="email"
            placeholder="Enter Email ID"
            label="Email Address"
            type="email"
            register={register("email", { required: "This filed is required" })}
            error={errors.email}
            required
          />
          <Form
            name="mobile"
            placeholder="Enter Mobile No"
            label="Mobile No"
            type="tel"
            register={register("mobile", {
              required: "This filed is required",
            })}
            error={errors.mobile}
            required
          />
          <TextArea
            name="message"
            placeholder="Enter Message"
            label="Message"
            register={register("message", {
              required: "This filed is required",
            })}
            error={errors.message}
            required
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

export default FormPageByHook;
