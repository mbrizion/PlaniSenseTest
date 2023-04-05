import { PropsWithChildren } from "react";
import Navbar from "../Navbar";
import "./style.scss";

const Default = (props: PropsWithChildren) => {
  return (
    <div className="default-wrapper">
      <Navbar />
      <div className="default">{props.children}</div>
    </div>
  );
};

export default Default;
