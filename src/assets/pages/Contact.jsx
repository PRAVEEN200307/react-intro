import { useForm } from "react-hook-form";
import InputForm from "../components/forms/InputForm";
import InputTextArea from "../components/forms/InputTextArea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  userMessage: z.string().min(8).max(150),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues:{
    //   name:"praveen"
    // }
    resolver: zodResolver(schema),
  });

  const handleSubmitFromTheServer = (data) => {
    console.log(data);
    alert("form submitted successfully");
  };

  return (
    <div className=" bg-gray-200 min-h-screen">
      <div className="bg-white p-10">
        <h1 className="text-2xl">Contact Page</h1>
        <form action="#" onSubmit={handleSubmit(handleSubmitFromTheServer)}>
          <div className="mt-2 space-y-4">
            <InputForm
              formName="UserName"
              id="UserName"
              label="name"
              name="name"
              placeHolder="Enter a your Name"
              required
              register={register("name", {
              required: "This name field required",
                // minLength:{
                //   value:3,
                //   message:"minimum 3 charater required"
                // },
                // maxLength:{
                //   value:20,
                //   message:"maxmimum 20 charater requirest"
                // }
              })}
              error={errors.name}
            />

            <InputForm
              formName="userEmail"
              id="userEmail"
              label="email"
              name="email"
              placeHolder="Enter a your email"
              type="email"
              register={register("email", {
                // required: "This Email field required",
              })}
              error={errors.email}
            />

            <InputTextArea
              formName="message"
              label="Message"
              name="userMessage"
              id="message"
              placeHolder="Enter a message"
              required
              register={register("userMessage", {
                // required: "This Message field required",
              })}
              error={errors.userMessage}
            />
            <div>
              <button className=" bg-green-500 px-5 py-2 rounded text-white">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
