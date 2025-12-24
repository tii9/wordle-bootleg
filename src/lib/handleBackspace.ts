// type handleBackspaceProps = {};

import type { Cell } from "../types/cell";

const handleBackspace = (
  currentBox: number,
  currentRow: number,
  setCurrentBox: React.Dispatch<React.SetStateAction<number>>,
  setGrid: React.Dispatch<React.SetStateAction<Cell[][]>>,
  setGuessWord: React.Dispatch<React.SetStateAction<string[]>>
) => {
  if (currentBox === 0) return;

  setGrid((prev) => {
    const next = structuredClone(prev);
    next[currentRow][currentBox - 1].letter = "";
    return next;
  });

  setCurrentBox((prev) => prev - 1);

  setGuessWord((prev) => prev.slice(0, -1));
};

export default handleBackspace;
