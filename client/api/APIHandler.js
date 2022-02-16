import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:4000",
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response, error.response.data);
    throw error;
  }
  throw error;
}

const APIHandler = {
  ...service,
  async isLoggedIn() {
    try {
      const { data } = await service.get("/api/is-loggedin");
      return data;
    } catch (e) {
      errorHandler(e);
    }
  },
};

export default APIHandler;
