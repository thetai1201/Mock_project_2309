import axios from "axios";
import { loginUrl, registerUrl } from "./Api";
export const registerApi = ({ username, password,email,phoneNumber }) => {
  const registerRequest = axios({
    method: "POST",
    url: registerUrl,
    params: { username, password,email,phoneNumber },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return registerRequest;
};

export const loginApi = ({username, password }) => {
  const loginRequest = axios({
    method: "POST",
    url: loginUrl,
    data: { username, password },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return loginRequest;
};
