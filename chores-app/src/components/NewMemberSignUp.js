/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { auth } from "../firebase-config";

// eslint-disable-next-line react/prop-types
const NewMemberSignUp = ({ createUserWithEmailAndPassword }) => {
  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get("email");
  const userRole = searchParams.get("role");

  const initialState = {
    fields: {
      email: userEmail,
      role: userRole,
      yourName: "",
      password: "",
      confirmPassword: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const registration = async (event) => {
    event.preventDefault();
    if (fields.password === fields.confirmPassword) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          fields.email,
          fields.password
        );
        console.log(user);
        setSuccess(true);
      } catch (e) {
        console.log(e.message);
        setError("An error occurred");
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
  //     // .post("http://localhost:3300/user", fields)
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
      {success && userRole === "parent" && (
        <>
          <h1>Success</h1>
          <div>
            <button
              type="button"
              onClick={
                console.log("placeholder for code")
                // axios.get -> user account info & set it in context?
              }
            >
              <a href="/parentdashboard">
                click here to access your new account
              </a>
            </button>
          </div>
        </>
      )}
      {success && userRole === "child" && (
        <>
          <h1>Success</h1>
          <div>
            <button
              type="button"
              onClick={
                console.log("placeholder for code")
                // axios.get -> user account info & set it in context?
              }
            >
              <a href="/childdashboard">
                click here to access your new account
              </a>
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
            <form onSubmit={registration}>
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
              {!!error && <p>{error}</p>}
              <button type="submit">Complete Account</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default NewMemberSignUp;
