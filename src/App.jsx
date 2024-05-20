import { useState } from "react";
import Lines from "src/components/Lines";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <Lines />
    </div>
  );
}

export default App;
