/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const SignUpForm = () => {
  const initialState = {
    fields: {
      familyName: "",
      yourName: "",
      yourEmail: "",
      password: "",
      confirmPassword: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const registration = async (event) => {
    event.preventDefault();
    if (fields.password === fields.confirmPassword) {
      try {
        await signUp(fields.yourEmail, fields.password);
        navigate("/");
        setSuccess(true);
      } catch (e) {
        setError(e.message);
      }
    } else {
      setError("Those passwords did not match, please try again");
    }
  };

  // const createAccount = (event) => {
  //  event.preventDefault();
  //   {
  //     registration();
  //     // some axios code to go here to send the field data to the database
  //     // axios;
  //     // .post("http://localhost:3300/user", the email & (firebase) uid)
  //     // .then((response) => {
  //     //   console.log(response.status);
  //     // })
  //     // .catch(() => {
  //     //   console.log(404);
  //     // });
  //     // currently the fields will reset but we can change this so we  change the page to be the parent's home page once this is

  //     setFields(initialState.fields);
  //     setSuccess(true);
  //   }
  // };
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="sign-up-container">
      {success && (
        <>
          <h1>Success</h1>
          <div>
            <button type="button">
              <a href="/parentdashboard">
                click here to access your new account
              </a>
            </button>
          </div>
        </>
      )}
      {!success && (
        <>
          <h1>Sign Up</h1>
          <div>
            <form onSubmit={registration}>
              <label htmlFor="familyName">Family Name </label>
              <input
                name="familyName"
                required
                type="text"
                placeholder="e.g. The Cool Gang"
                value={fields.familyName}
                onChange={handleFieldChange}
              />

              <label htmlFor="yourName">Your Name </label>
              <input
                name="yourName"
                required
                type="text"
                placeholder="e.g Mommy"
                value={fields.yourName}
                onChange={handleFieldChange}
              />

              <label htmlFor="yourEmail">Your Email</label>
              <input
                type="email"
                name="yourEmail"
                required
                placeholder="e.g example@example.com"
                value={fields.email}
                onChange={handleFieldChange}
              />

              <label htmlFor="password">
                Password (minimum 6 characters, must contain a letter and a
                number)
              </label>
              <input
                type="password"
                name="password"
                data-testid="password"
                required
                placeholder="*******"
                minLength="6"
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

              <button type="submit">Create Account</button>
            </form>
          </div>
          <p>
            You will be able to invite more family members once you make your
            account.
          </p>
        </>
      )}
    </div>
  );
};

export default SignUpForm;
