import React from "react";

import styles from "../Components/customize.module.css";

const InputSelect = ({ label, value, setValue, onChange, ...props }) => {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={styles.input}>
      <label htmlFor={label}>{capitalize(label)}:</label>
      <input
        type="text"
        name={label}
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputSelect;
