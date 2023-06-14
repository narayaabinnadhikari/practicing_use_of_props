import { useState } from "react";
import Update from "./Update";

function App() {
  const [num, setNum] = useState(0);
  const counter = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <h3>count: {num}</h3>
      <Update count={counter} />
    </div>
  );
}

export default App;
