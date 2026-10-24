import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

myAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

myAxios.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
      }
      return Promise.reject(error);
  }
);

export const registerCustomer = (customerData) => {
  return myAxios.post("/regCustomer", customerData);
};

export const loginUser = (loginData) => {
  console.log("getting call to axios login");
  return myAxios.post("/login", loginData);
};

export const getCustomerById = (cid) => {
  return myAxios.get(`/customer/getCustomer/${cid}`);
};

export const updateCustomer = (cid, customer) => {
  return myAxios.patch(`/customer/updateCustomer/${cid}`, customer);
};

export const deleteCustomerById = (cid) => {
  return myAxios.delete(`/customer/deleteCustomer/${cid}`);
};

export const getAllCustomers = () => {
  return myAxios.get("/admin/getAllCustomers");
};

export const sendOtp=(email)=>{
  return myAxios.post(
      "/forgot-password",
      {email}
  );
}

export const verifyOtp=(data)=>{
  return myAxios.post(
      "/verify-otp",
      data
  );
}

export const loginWithGoogle = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/google";
};