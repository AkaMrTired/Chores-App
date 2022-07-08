import React, { useState } from "react";

const SignUpForm = () => {
  return (
    <div className="sign-up-container">
      <div>
        <form>
          <label htmlFor="familyName">Family Name </label>
          <input
            name="familyName"
            required
            type="text"
            placeholder="e.g. The Cool Gang"
          />

          <label>
            Your Name
            <input required type="text" placeholder="e.g Mommy" />
          </label>
          <label>
            Your Email
            <input
              type="email"
              required
              placeholder="e.g example@example.com"
            />
          </label>
          <label>
            Password
            <input required placeholder="*******" />
          </label>
          <label>
            Confirm Password
            <input required placeholder="*******" />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </div>
      <p>
        You will be able to invite more family members after you've made your
        account.
      </p>
    </div>
  );
};

export default SignUpForm;
