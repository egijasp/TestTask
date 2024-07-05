import "./Logo.scss";
import { FC } from "react";

type LogoProps = {
  src: string;
  alt: string;
};

const Logo: FC<LogoProps> = ({ src, alt }) => (
  <img src={src} className="logo" alt={alt} />
);

export default Logo;
