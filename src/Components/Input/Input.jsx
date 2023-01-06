import React from "react";
import useForm from "../../Hooks/useForm";

import styles from "./Input.module.css";
import grid from "../grid.module.css";

const Input = ({
  hiddenTag,
  classGrid,
  label,
  hover,
  focus,
  placeholder = "Placeholder",
  error = false,
  disabled = false,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
  text,
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
              {value && `value="${value}"`}
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
        ${error === true ? styles.error : ""}
        ${disabled === true ? styles.disabled : ""}
        ${size !== undefined ? styles[size] : ""}
        ${fullWidth !== undefined ? styles.fullWidth : ""}
        `}
      >
        {label ? (
          <label htmlFor={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </label>
        ) : (
          <label htmlFor="label">Label</label>
        )}

        <div
          className={`${startIcon ? styles.input_icon_start : ""} ${
            endIcon ? styles.input_icon_end : ""
          }`}
        >
          {startIcon && <span className={"material-icons"}>{startIcon}</span>}
          {endIcon && <span className={"material-icons"}>{endIcon}</span>}
          {!multiline ? (
            <input
              type="text"
              placeholder={placeholder}
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
              placeholder={placeholder}
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
