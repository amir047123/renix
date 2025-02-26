import axios from "axios";

export default axios.create({
  baseURL: "https://server.renixlaboratories.com.bd/api/v1",
});

export const server_url = `http://localhost:3001/api/v1`;
// export const server_url = `https://server.renixlaboratories.com.bd/api/v1`;
