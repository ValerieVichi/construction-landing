import axios from "axios";

export default function postFormInfo(name, phone, message) {
  return axios.post(
    "https://us-central1-biglittlehelp-beta.cloudfunctions.net/addMessage",
    {
      name,
      phone,
      message,
    }
  );
}
