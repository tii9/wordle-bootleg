import BackspaceIcon from "./icons/BackspaceIcon";

type KeyButtonProps = {
  value?: string;
};

const KeyButton = ({ value = "-" }: KeyButtonProps) => {
  return (
    <button className="p-4 min-w-13 bg-slate-300 font-medium text-xl rounded-md cursor-pointer hover:bg-slate-300/90">
      {value == "BACKSPACE" ? <BackspaceIcon /> : value}
    </button>
  );
};

export default KeyButton;
