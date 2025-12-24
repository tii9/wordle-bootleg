import { useState } from "react";
import handleBackspace from "./handleBackspace";
import type { Cell } from "../types/cell";

const useGuessWord = () => {
  const [currentRow, setCurrentRow] = useState(0);
  const [currentBox, setCurrentBox] = useState(0);
  const [guessWord, setGuessWord] = useState<string[]>([]);

  const [grid, setGrid] = useState<Cell[][]>(
    Array.from({ length: 6 }, () =>
      Array.from({ length: 5 }, () => ({ letter: "" }))
    )
  );

  const handleWord = (key: string) => {
    if (key == "BACKSPACE") {
      if (guessWord.length < 0) return;

      handleBackspace(
        currentBox,
        currentRow,
        setCurrentBox,
        setGrid,
        setGuessWord
      );

      return;
    }

    if (key == "ENTER") {
      // if (currentRow == 5) return;
      if (guessWord.length < 5) return;

      alert(guessWord.join(""));

      setGuessWord([]);
      setCurrentBox(0);
      setCurrentRow((prev) => prev + 1);
      return;
    }

    if (currentRow == 6) return;
    if (guessWord.length >= 5) return;

    setGrid((prev) => {
      const next = structuredClone(prev);
      next[currentRow][currentBox].letter = key;
      return next;
    });

    setCurrentBox((prev) => prev + 1);

    setGuessWord((prev) => [...prev, key]);
  };

  return { grid, handleWord };
};

export default useGuessWord;
