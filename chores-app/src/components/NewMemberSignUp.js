/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// eslint-disable-next-line react/prop-types
const NewMemberSignUp = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  const initialState = {
    fields: {
      email,
      name,
      password: "",
      confirmPassword: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [error, setError] = useState();

  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const registration = (event) => {
    event.preventDefault();
    if (fields.password === fields.confirmPassword) {
      signUp(fields.email, fields.password)
        .then(() => {
          return axios.get(
            `http://localhost:3300/family/users/?email=${email}`
          );
        })
        .then((response) => {
          const [{ userID, role, familyID }] = response.data;
          localStorage.setItem("userID", JSON.stringify(userID));
          localStorage.setItem("userRole", JSON.stringify(role));
          localStorage.setItem("familyID", JSON.stringify(familyID));
          if (fields.name !== initialState.fields.name) {
            axios.patch(
              `http://localhost:3300/family/${familyID}/users/${userID}`,
              {
                name: fields.name,
              }
            );
          }
        })
        .then(() => {
          const userRole = localStorage.getItem("userRole");
          if (userRole === "parent") {
            navigate("/parentdashboard");
          } else {
            navigate("/childdashboard");
          }
        })
        .catch((e) => {
          setError(e.message);
        });
    } else {
      setError("Those passwords did not match, please try again");
    }
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <p>
        Please finish creating your account by setting your preferred name and
        password
      </p>
      <div>
        <form onSubmit={registration}>
          <label htmlFor="name">Your Name </label>
          <input
            name="name"
            required
            type="text"
            placeholder={fields.name}
            value={fields.name}
            onChange={handleFieldChange}
          />

          <label htmlFor="password">
            Password (minimum 5 characters, must contain a letter and a number)
          </label>
          <input
            type="password"
            name="password"
            data-testid="password"
            required
            placeholder="*******"
            minLength="5"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
            value={fields.password}
            onChange={handleFieldChange}
          />

          <label htmlFor="confirmPassword">Confirm Password </label>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="*******"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
          {!!error && <p>{error}</p>}
          <button type="submit">Complete Account</button>
        </form>
      </div>
    </div>
  );
};

export default NewMemberSignUp;
