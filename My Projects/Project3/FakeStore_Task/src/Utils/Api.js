import axios from "axios";

const api = axios.create({
  baseURL: "https://bakery-shop-y90p.onrender.com",
});

export const fetchProductsApi = () => api.get("/product");

export default api;
