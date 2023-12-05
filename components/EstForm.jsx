import { useForm } from "react-hook-form";
import "../stylesheets/EstForm.scss";
import RequestEstimateBtn from "./RequestEstimateBtn";
import { useEffect, useState } from "react";
import FormSubmittedModal from "./FormSubmittedModal";

export default function EstForm({
  border,
  bgColor,
  textColor,
  estimateBtnFontSize,
}) {
  const [isFormSubmitted, setIsFormSubmittted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form submitted", data);
    setIsFormSubmittted(true);
  };

  // const onError = (errors) => {
  //   console.log(errors);
  //   console.log("There was an error");
  // };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", phone: "", msg: "" });
      setTimeout(() => {
        setIsFormSubmittted(false);
      }, 3000);
    }
  }, [isSubmitSuccessful, reset]);

  const registerOptions = {
    name: {
      required: "Name can not be blank",
      minLength: {
        value: 3,
        message: "May we at least have your full first name?",
      },
    },
    phone: {
      required: "Please add your phone number",
      minLength: {
        value: 10,
        message: "Phone number should consist of 10 digits minimum",
      },
    },
  };

  return (
    <>
      <form id="est-form" onSubmit={handleSubmit(onSubmit)}>
        <p style={{ color: textColor }}>* Required</p>
        <label>
          <span style={{ color: textColor }}>Your Name</span>
          <span className="red-star"> *</span>
          <small className="text-danger">
            {errors?.name && errors.name.message}
          </small>
          <input
            style={{
              color: textColor,
              border: border,
              backgroundColor: bgColor,
            }}
            type="text"
            name="name"
            {...register("name", registerOptions.name)}
          />
        </label>
        <label>
          <span style={{ color: textColor }}>Phone number</span>
          <span className="red-star"> *</span>
          <small className="text-danger">
            {errors?.phone && errors.phone.message}
          </small>
          <input
            style={{
              color: textColor,
              border: border,
              backgroundColor: bgColor,
            }}
            type="tel"
            name="phone"
            {...register("phone", registerOptions.phone)}
          />
        </label>

        <label>
          <span style={{ color: textColor }}>Your Message</span>
          {/* <span className="red-star"> *</span> */}
          <textarea
            style={{
              color: textColor,
              border: border,
              backgroundColor: bgColor,
            }}
            className="msg-text"
            id="msg"
            name="msg"
            {...register("msg")}
          />
        </label>
        <RequestEstimateBtn
          marginTop="25px"
          btnFontSize={estimateBtnFontSize}
        />
      </form>
      <FormSubmittedModal isFormSubmitted={isFormSubmitted} />
    </>
  );
}
