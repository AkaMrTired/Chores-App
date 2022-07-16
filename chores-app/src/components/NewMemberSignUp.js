/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const NewMemberSignUp = () => {
  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get("email");

  const initialState = {
    fields: {
      email: userEmail,
      yourName: "",
      password: "",
      confirmPassword: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [passwordError, setPasswordError] = useState();
  const [success, setSuccess] = useState(false);

  const completeAccount = (event) => {
    if (fields.password === fields.confirmPassword) {
      // some axios code to go here to send the field data to the database
      // axios;
      // .put/patch("http://localhost:3300/user", fields)
      // .then((response) => {
      //   console.log(response.status);
      // })
      // .catch(() => {
      //   console.log(404);
      // });
      // currently the fields will reset but we can change this so we  change the page to be the parent's home page once this is
      setSuccess(true);
    } else {
      event.preventDefault();
      setPasswordError("Those passwords did not match, please try again");
    }
  };
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
              <a href="/">click here to sign into your new account</a>
            </button>
          </div>
        </>
      )}
      {!success && (
        <>
          <h1>Sign Up</h1>
          <p>
            Please finish creating your account by setting your preferred name
            and password
          </p>
          <div>
            <form onSubmit={completeAccount}>
              <label htmlFor="yourName">Your Name </label>
              <input
                name="yourName"
                required
                type="text"
                placeholder="e.g Mommy"
                value={fields.yourName}
                onChange={handleFieldChange}
              />

              <label htmlFor="password">
                Password (minimum 5 characters, must contain a letter and a
                number)
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
              {!!passwordError && <p>{passwordError}</p>}
              <button type="submit">Complete Account</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default NewMemberSignUp;
