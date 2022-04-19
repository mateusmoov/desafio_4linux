import React, { Fragment } from "react";
import "./styles.css";

const InputAndLabel = ({
  name,
  label,
  type,
  placeHolder,
  onChange,
  disabled,
}) => {
  return (
    <Fragment>
      <div>
        <label htmlFor={name} className="textLabel">
          {label}
        </label>
        <Fragment>
          <input
            className="input"
            id={name}
            placeholder={placeHolder}
            type={type}
            min={0}
            onChange={onChange}
            disabled={disabled}
          />
        </Fragment>
      </div>
    </Fragment>
  );
};

export default InputAndLabel;
