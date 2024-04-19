import React from "react";
import axios from "axios";
import { address } from "./index";

export function submit_course_registration(data) {
    return axios
      .post(`${address()}cisco-subscriber/submit`, data)
      // .then(res => res.json())
      .catch(err => Promise.reject(err));
  }