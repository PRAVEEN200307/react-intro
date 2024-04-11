import { useState } from "react";
import FormButtons from "../components/buttons/FormButtons";
import InputForm from "../components/forms/InputForm";
import InputTextArea from "../components/forms/InputTextArea";

function Contact() {
  const [form, setForm] = useState({ uName: "", inputEmail: "", msg: "" });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm((preview) => ({
      ...preview,
      [name]: value,
    }));
  };

  const submitFormtoServer = (e) => {
    e.preventDefault();
    console.log(form);
    alert("form submitted succesfully!");
  };

  return (
    <div className=" bg-gray-200 min-h-screen">
      <div className="bg-white p-10">
        <h1 className="text-2xl">Contact Page</h1>
        <form action="" onSubmit={submitFormtoServer}>
          <div className="mt-2 space-y-4">
            <InputForm
              label="Name"
              placeHolder="Enter a name"
              formName="UserName"
              id="UserName"
              name="uName"
              type="text"
              value={form.uName}
              handleOnchange={handleInputs}
              required
            />
            <InputForm
              label="Email"
              placeHolder="Enter a email"
              formName="userEmail"
              id="userEmail"
              name="inputEmail"
              type="email"
              value={form.inputEmail}
              handleOnchange={handleInputs}
            />

            <InputTextArea
              label="Message"
              placeHolder="Enter a messsage"
              formName="userMessage"
              id="userMessage"
              name="msg"
              type="email"
              value={form.msg}
              handleOnchange={handleInputs}
              required
            />
            <div>
              <FormButtons text="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
