import React from "react";
import useForm from "../../Hooks/useForm";

import styles from "./Input.module.css";
import grid from "../grid.module.css";

const Input = ({
  hiddenTag,
  classGrid,
  label = "label",
  hover,
  focus,
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
  ...props
}) => {
  const valueText = useForm(value);

  return (
    <div
      className={`${styles.containerInput} ${fullWidth ? styles.full : ""} ${
        classGrid ? grid[classGrid] : ""
      }`}
    >
      {!hiddenTag && (
        <code>
          {!hover && !focus && (
            <p className="tag">
              &lt;Input {disabled && "disabled"}{" "}
              {helperText && `helperText="${helperText}"`}{" "}
              {startIcon && "startIcon"} {endIcon && "endIcon"}{" "}
              {size && `size="${size}"`} {fullWidth && "fullWidth"}{" "}
              {multiline && "multiline"} {row && `row="${row}" `}
              {error && "error"}
              /&gt;
            </p>
          )}
          {hover && !focus && <p className="info">&:hover</p>}
          {focus && <p className="info">&:focus</p>}
        </code>
      )}

      <div
        className={`
        ${styles.input_group} 
        ${hover !== undefined ? styles.hover : ""} 
        ${focus !== undefined ? styles.focus : ""}
        ${error !== undefined ? styles.error : ""}
        ${disabled !== undefined ? styles.disabled : ""}
        ${size !== undefined ? styles[size] : ""}
        ${fullWidth !== undefined ? styles.fullWidth : ""}
        `}
      >
        <label htmlFor={label}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
        <div
          className={`${startIcon ? styles.input_icon_start : ""} ${
            endIcon ? styles.input_icon_end : ""
          }`}
        >
          {startIcon && <span class={"material-icons"}>{startIcon}</span>}
          {endIcon && <span class={"material-icons"}>{endIcon}</span>}
          {!multiline ? (
            <input
              type="text"
              placeholder="Placeholder"
              name={label}
              id={label}
              disabled={disabled}
              value={valueText.value}
              onChange={valueText.onChange}
              className={`
          ${styles.input}
          `}
            />
          ) : (
            <textarea
              placeholder="Placeholder"
              rows={row}
              className={`
            ${styles.input}
            ${styles.multiline}
            `}
            ></textarea>
          )}
        </div>
        {helperText && <span className={styles.helper}>{helperText}</span>}
      </div>
    </div>
  );
};

export default Input;
