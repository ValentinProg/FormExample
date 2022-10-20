import './BasicForm.css'
import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const [enteredRepeatPassword, setEnteredRepeatPassword] = useState("");
  const [enteredRepeatPasswordTouched, setEnteredRepeatPasswordTouched] =
    useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid = enteredPassword.length > 5;
  const enteredPasswordIsInValid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const enteredRepeatPasswordIsValid =
    enteredRepeatPassword === enteredPassword;
  const enteredRepeatPasswordIsInValid =
    !enteredRepeatPasswordIsValid && enteredRepeatPasswordTouched;

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredRepeatPasswordIsValid
  ) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const repeatPasswordInputChangeHandler = (event) => {
    setEnteredRepeatPassword(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const repeatPasswordInputBlurHandler = (event) => {
    setEnteredRepeatPasswordTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (enteredPassword !== enteredRepeatPassword) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredPassword);
    console.log(enteredRepeatPassword);

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);

    setEnteredPassword("");
    setEnteredPasswordTouched(false);

    setEnteredRepeatPassword("");
    setEnteredRepeatPasswordTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInValid
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = enteredPasswordIsInValid
    ? "form-control invalid"
    : "form-control";

  const repeatPasswordInputClasses = enteredRepeatPasswordIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={nameInputBlurHandler}
            onChange={nameInputChangeHandler}
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            onBlur={emailInputBlurHandler}
            onChange={emailInputChangeHandler}
            value={enteredEmail}
          />
          {enteredEmailIsInValid && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>
      <div className="control-group">
        <div className={passwordInputClasses}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onBlur={passwordInputBlurHandler}
            onChange={passwordInputChangeHandler}
            value={enteredPassword}
          />
          {enteredPasswordIsInValid && (
            <p className="error-text">Please enter a password longer 5 sybols.</p>
          )}
        </div>
        <div className={repeatPasswordInputClasses}>
          <label htmlFor="repeatPassword">Confirm Password</label>
          <input
            type="password"
            id="repeatPassword"
            onBlur={repeatPasswordInputBlurHandler}
            onChange={repeatPasswordInputChangeHandler}
            value={enteredRepeatPassword}
          />
          {enteredRepeatPasswordIsInValid && (
            <p className="error-text">Passwords do not match</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
