import Backspace from "../../assets/backspace-icon.svg";

type IconTypes = {
  className?: string;
};

const BackspaceIcon = ({ className }: IconTypes) => {
  return <img src={Backspace} alt="Backspace" className={className} />;
};

export default BackspaceIcon;
