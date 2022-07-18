/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const { logIn, user } = useUserAuth();
  const navigate = useNavigate();

  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };
  // const userRole = "parent"; // to check on functionality - should come from context
  // const [success, setSuccess] = useState(false);
  const [fields, setFields] = useState(initialState.fields);
  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      await logIn(fields.email, fields.password);
      navigate("/parentdashboard");
      console.log(user);
      // needs to axios.get and set context for the app.
      // setSuccess(true);
      // console.log(success);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
    console.log({ fields });
  };
  return (
    <form onSubmit={handleLogIn}>
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        name="email"
        required
        placeholder="e.g example@example.com"
        value={fields.email}
        onChange={handleFieldChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        required
        placeholder="*******"
        value={fields.password}
        onChange={handleFieldChange}
      />
      <button type="submit">Log in</button>
    </form>
    // <div className="sign-up-container">
    //   {success && userRole === "parent" && (
    //     <>
    //       <h1>Success</h1>
    //       <div>
    //         <button
    //           type="button"
    //           onClick={
    //             console.log("placeholder for code")
    //             // axios.get -> user account info & set it in context - need to have access to the user role to render the correct link to the dashboard!!!
    //           }
    //         >
    //           <a href="/parentdashboard">click here to access your account</a>
    //         </button>
    //       </div>
    //     </>
    //   )}
    //   {success && userRole === "child" && (
    //     <>
    //       <h1>Success</h1>
    //       <div>
    //         <button
    //           type="button"
    //           onClick={
    //             console.log("placeholder for code")
    //             // axios.get -> user account info & set it in context?
    //           }
    //         >
    //           <a href="/childdashboard">click here to access your account</a>
    //         </button>
    //       </div>
    //     </>
    //   )}
    //   {!success && (
    //     <form onSubmit={logIn}>
    //       <label htmlFor="email">Your Email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         required
    //         placeholder="e.g example@example.com"
    //         value={fields.email}
    //         onChange={handleFieldChange}
    //       />
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         required
    //         placeholder="*******"
    //         value={fields.password}
    //         onChange={handleFieldChange}
    //       />
    //       <button type="submit">Log in</button>
    //     </form>
    //   )}
    // </div>
  );
};

export default Login;
