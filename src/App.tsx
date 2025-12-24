import { useEffect } from "react";
import KeyButton from "./components/KeyButton";
import { ANSWER_WORDS } from "./lib/ANSWER_WORDS";
import keyboardRows from "./lib/keyboardRows";
import useGuessWord from "./lib/useGuessWord";

const App = () => {
  const { grid, handleWord } = useGuessWord();

  useEffect(() => {
    const answer =
      ANSWER_WORDS[Math.floor(Math.random() * ANSWER_WORDS.length)];
    console.log(answer);
  }, []);

  return (
    <div className="container mx-auto h-screen select-none">
      <h1 className="text-center text-4xl font-medium pt-2 pb-4">KataLe</h1>
      <div className="grid gap-2">
        {grid.map((row, i) => (
          <div key={i} id={`row_${i}`} className="flex justify-center gap-2 ">
            {row.map((box, j) => (
              <div
                key={j}
                id={`box_${i}_${j}`}
                className="size-13 border border-slate-400 text-2xl flex justify-center items-center font-medium"
              >
                {box.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="my-2 py-2 grid gap-2">
        {keyboardRows.map((row, i) => (
          <div key={i} className="flex justify-center gap-2">
            {row.map((key, i) => (
              <KeyButton key={i} value={key} onClick={() => handleWord(key)} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
