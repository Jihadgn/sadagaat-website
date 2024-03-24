import React from "react";
import axios from "axios";
import address from "./services";

const tokenKey = "x-access-token";
const user_email = "user_email";


export default async function feedback(data) {
  return axios
    .post(`${address()}feedBacks`, data)
};

