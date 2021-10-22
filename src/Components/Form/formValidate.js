// @ts-nocheck


import React, { useState, useEffect, useRef } from "react";

export default function FormValidate(inputs) {
   let error = {};
 // const [error, setError] = useState({})
  if (!inputs.firstName.trim()) {
    error.firstName = "first name is required";
  }
  if (!inputs.lastName.trim()) {
    error.lastName = "last name is required";
  }
  if (!inputs.email.trim()) {
    error.email = "email is required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputs.email)
  ) {
    error.email = "Email is not valid";
  }

  if (!inputs.password) {
    error.password = "password is required";
  }else if (inputs.password.length < 6) {
    error.password = 'Password needs to be 6 characters or more';
  }
  if (!inputs.confirmPassword) {
    error.ConfirmPassword = "ConfirmPassword is required";
  }else if (inputs.password !== inputs.confirmPassword) {
    error.ConfirmPassword = 'Passwords do not match';
  }
  if (!inputs.image) {
    error.image = "image is required";
  }  
  if (!inputs.cnicvalue) {
    error.cnicvalue = "CNIC number is required";
  }
  if (!inputs.phone) {
    error.phone = "phone number is required";
  }
  if (!inputs.province) {
    error.province = "province is required";
  }
  if (!inputs.game) {
    error.game = "province is required";
  }
  if (!inputs.dobvalue) {
    error.dobvalue = "date of birth is required";
  }
  if (!inputs.cnicDate) {
    error.cnicDate = "cnic Date is required";
  }
  return error;
}
