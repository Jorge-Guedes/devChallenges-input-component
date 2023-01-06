import { ReactComponent as ShopCart } from "../../Assets/icons/add_shopping.svg";

import styles from "./Button.module.css";
import grid from "../grid.module.css";

const Button = ({
  classGrid,
  visibleText = false,
  hiddenTag = false,
  label = true,
  text = "Default",
  active = false,
  variant,
  disabledShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  color,
  size,
}) => {
  return (
    <div
      className={`${styles.containerBtn} ${
        classGrid ? grid[classGrid] : ""
      }`}
    >
      <code>
        {active || hiddenTag
          ? ""
          : label && (
              <p className="tag">
                &lt;Button
                {variant && ` variant="${variant}"`} {disabled && " disabled"}
                {!variant && disabledShadow && "disableShadow "}{" "}
                {color && !size && visibleText && ` color="${color}"`}{" "}
                {size && visibleText && ` size="${size}"`}{" "}
                {startIcon && ` startIcon="${startIcon}"`}{" "}
                {endIcon && ` endIcon="${endIcon}"`} /&gt;
              </p>
            )}
        {active && !visibleText && <p className="info">&:hover, &:focus</p>}
      </code>
      <button
        className={`
        ${styles.button}
        ${active === false ? "" : styles.active} 
        ${disabled === false ? "" : styles.disabled} 
        ${disabledShadow === false ? "" : styles.disabledShadow}
        ${variant === undefined ? "" : styles[variant]} 
        ${color === undefined ? "" : styles[color]} 
        ${size === undefined ? "" : styles[size]} 
        `}
      >
        {startIcon && (
          <span className={styles.startIcon}>
            {startIcon === "local_grocery_store" ? <ShopCart /> : ""}
          </span>
        )}
        {text}
        {endIcon && (
          <span className={styles.endIcon}>
            {endIcon === "local_grocery_store" ? <ShopCart /> : ""}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
