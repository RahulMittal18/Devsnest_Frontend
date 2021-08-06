import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNameInput, updateEmailInput } from "../actions";

const Form = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();
  return (
    <div className="form">
      <h1>Input</h1>
      <form action="">
        <div className="input">
          <div className="input-name">
            <span>
              <h3>Name</h3>
            </span>
            <input
              type="text"
              value={name}
              spellCheck="false"
              onChange={(e) => dispatch(updateNameInput(e.target.value))}
            />
          </div>

          <div className="input-email">
            <span>
              <h3>Email</h3>
            </span>
            <input
              type="text"
              value={email}
              spellCheck="false"
              onChange={(e) => dispatch(updateEmailInput(e.target.value))}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
