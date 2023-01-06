import React from "react";

import styles from "../Components/customize.module.css";

const InputSelect = ({ label, value, setValue, onChange, ...props }) => {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const optionsVariant = ["default", "outline", "text"];
  const optionsColor = ["default", "primary", "secondary", "danger"];
  const optionsSize = ["default", "small", "medium", "large"];

  function renderizeOptions(optionArray) {
    return optionArray.map((option) => (
      <option key={option} value={option}>
        {capitalize(option)}
      </option>
    ));
  }

  function renderizeOptionsSize(optionSizeArray) {
    return optionSizeArray.map((optionSize) => {
      let value;
      switch (optionSize) {
        case "small":
          value = "sm";
          break;
        case "medium":
          value = "md";
          break;
        case "large":
          value = "lg";
          break;
        default:
          value = "default";
          break;
      }
      return (
        <option key={value} value={value}>
          {capitalize(optionSize)}
        </option>
      );
    });
  }

  return (
    <div className={styles.input}>
      <label htmlFor={label}>{capitalize(label)}:</label>
      <select value={value} onChange={onChange} name={label} id={label}>
        {props.variants && renderizeOptions(optionsVariant)}
        {props.colors && renderizeOptions(optionsColor)}
        {props.sizes && renderizeOptionsSize(optionsSize)}
      </select>
    </div>
  );
};

export default InputSelect;
