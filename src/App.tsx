import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Trans from "./components/Trans";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  return (
    <main className="container">
      <h1>Cardiy Translate</h1>
      <div>
        <Trans></Trans>
      </div>
    </main>
  );
}

export default App;
