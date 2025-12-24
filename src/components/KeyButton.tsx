import BackspaceIcon from "./icons/BackspaceIcon";

type KeyButtonProps = {
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const KeyButton = ({ value = "-", onClick }: KeyButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-4 min-w-13 bg-slate-300 font-medium text-xl rounded-md cursor-pointer hover:bg-slate-300/90"
    >
      {value == "BACKSPACE" ? <BackspaceIcon className="size-7" /> : value}
    </button>
  );
};

export default KeyButton;
