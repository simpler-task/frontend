import axios from "axios";

export const login = form => {
  return axios.post("http://localhost:8080/users/login", {
    ...form
  });
};
