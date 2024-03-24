import React from "react";
import axios from "axios";
import address from "./services";

const tokenKey = "x-access-token";
const user_email = "user_email";

export default async function submitvolunteer(data) {
  return axios
    .post(`${address()}members`, data)

    .then((response) => {
      return response.data;
    })
    .catch((err) => Promise.reject(err));
}

export async function feedback(data) {
  return axios
    .post(`${address()}feedBacks`, data)
};

export async function submit_course_registration(data) {
  return axios
    .post(`${address()}cisco-subscriber/submit`, data)
    // .then(res => res.json())
    .catch(err => Promise.reject(err));
}
