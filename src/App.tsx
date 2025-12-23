import KeyButton from "./components/KeyButton";
import keyboardRows from "./lib/keyboardRows";

const App = () => {
  return (
    <div className="container mx-auto h-screen select-none">
      <h1 className="text-center text-4xl font-medium pt-2 pb-4">KataLe</h1>
      <div className="grid gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex justify-center gap-2 ">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="size-13 border border-slate-400"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="my-2 py-2 grid gap-2">
        {keyboardRows.map((row, i) => (
          <div key={i} className="flex justify-center gap-2">
            {row.map((key, i) => (
              <KeyButton key={i} value={key} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
