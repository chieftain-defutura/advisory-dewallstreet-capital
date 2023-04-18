import React, { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: "primary" | "secondary" | "error" | "primary_gradient";
  children: ReactNode;
}

const Button: React.FC<IButton> = ({
  children,
  varient = "primary",
  ...rest
}) => {
  const getClassName = (type: string) => {
    switch (type) {
      case "secondary":
        return styles.btnSecondary;
      case "error":
        return styles.btnError;
      default:
        return styles.btnPrimary;
    }
  };

  return (
    <button className={getClassName(varient)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
