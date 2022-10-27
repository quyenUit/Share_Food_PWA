import axios from "./index";

const handleLoginApi = (userName, userPassword) => {
  return axios.post("/account/login", {
    username: userName,
    password: userPassword,
  });
};

export { handleLoginApi };
