import React, { useRef, useState } from "react";
import { APP } from "../../../constant";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../slices/authSlice";

const FormAuth = () => {
  const [errorInput, setErrorInput] = useState("");
  const [formState, setFormSate] = useState({
    email: "",
    password: "",
    checkbox: true,
  });

  const inputRef = useRef();
  const dispatch = useDispatch();

  const handlChange = (e) => {
    const { type, value, name, checked } = e.target;

    setFormSate((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isValidate = () => {
    let isVal = true;
    if (formState.email.trim() == "") {
      isVal = false;
      setErrorInput("Email is not empty!");
      inputRef.current.focus();
    }
    return isVal;
  };

  const handleSubmit = async (e) => {
    // Tat su kien reload default browser
    e.preventDefault();

    if (isValidate()) {
      const { email, password } = formState;

      // Call API LOGIN
      try {
        await dispatch(loginThunk({ email, password }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form3Example3">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="form3Example3"
          className="form-control"
          value={formState.email}
          onChange={handlChange}
          ref={inputRef}
        />
        {errorInput && <p className="text-danger mt-2">{errorInput}</p>}
      </div>
      {/* Password input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form3Example4">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="form3Example4"
          className="form-control"
          value={formState.password}
          onChange={handlChange}
        />
      </div>
      {/* Checkbox */}
      <div className="form-check d-flex justify-content-left mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          name="checkbox"
          id="form2Example33"
          checked={formState.checkbox}
          onChange={handlChange}
        />
        <label className="form-check-label" htmlFor="form2Example33">
          Subscribe to our newsletter
        </label>
      </div>
      {/* Submit button */}
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign up
      </button>
    </form>
  );
};

export default FormAuth;
