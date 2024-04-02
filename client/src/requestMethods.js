import axios from "axios";

const BASE_URL = "https://e-commerce-hkjp.onrender.com/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGFhNzRmYzRhNDI1ZmNjMTIwYzUzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTk5Mjc4MCwiZXhwIjoxNzEyMjUxOTgwfQ.EceKbRgTopt_sgjiaVa7NuPrfC7oc6Ntv4zvsmpVa4U"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });


  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });
