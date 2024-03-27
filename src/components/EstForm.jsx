import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import "../stylesheets/build/EstForm.css";
import RequestEstimateBtn from "./RequestEstimateBtn";
import { useEffect, useState } from "react";
import FormSubmittedModal from "./FormSubmittedModal";
import PropTypes from "prop-types";

export default function EstForm({
  border,
  bgColor,
  textColor,
  estimateBtnFontSize,
  onClickFormSubmit,
}) {
  const [isFormSubmitted, setIsFormSubmittted] = useState(false);
  const [phoneValue, setPhoneValue] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
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
      setPhoneValue("");

      setTimeout(() => {
        setIsFormSubmittted(false);
        onClickFormSubmit();
      }, 3000);
    }
  }, [isSubmitSuccessful, reset, setPhoneValue, onClickFormSubmit]);

  const registerOptions = {
    name: {
      required: "Name can not be blank",
      minLength: {
        value: 3,
        message: "May we at least have your first name?",
      },
    },
    phone: {
      required: "Please add your phone number",
      minLength: {
        value: 12,
        message: "Phone number should consist of 10 digits",
      },
      maxLength: {
        value: 12,
        message: "Phone number should consist of 10 digits",
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
          <PhoneInput
            country="US"
            control={control}
            value={phoneValue}
            onChange={setPhoneValue}
            style={{
              color: textColor,
              border: border,
              backgroundColor: bgColor,
            }}
            type="tel"
            name="phone"
            rules={registerOptions.phone}
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
      {createPortal(
        <FormSubmittedModal isFormSubmitted={isFormSubmitted} />,
        document.body
      )}
    </>
  );
}

EstForm.propTypes = {
  border: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  estimateBtnFontSize: PropTypes.string,
  onClickFormSubmit: PropTypes.func,
};
