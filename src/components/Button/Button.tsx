import { FC } from "react";

type ButtonProps = {
  label?: string;
  className?: string;
  icon?: string;
  iconClassName?: string;
  clickHandler?: () => void;
};

const Button: FC<ButtonProps> = ({
  label,
  className,
  icon,
  iconClassName,
  clickHandler,
}) => (
  <button type="button" className={className} onClick={clickHandler}>
    <i className={iconClassName}>{icon}</i>
    {label}
  </button>
);

export default Button;
