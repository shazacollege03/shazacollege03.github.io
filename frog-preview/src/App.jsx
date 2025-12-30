import React, { useState } from "react";
import Frog from "./Frog";
import Envelope from "./Envelope";
import EnvelopeOpen from "./EnvelopeOpen";
import ClickMe from "./clickMe";
import ClickMeAgain from "./clickmeAgain";
import LetterViewer from "./Letter";
import "./style.css";

export default function App() {
  const [scene, setScene] = useState("closed");
  const [showLetter, setShowLetter] = useState(false);
  return (
    <div className="app">
      <div className= "scene">
        <Frog />
        {scene === "closed" && <ClickMe />}
        {scene === "open" && <ClickMeAgain />}

        {scene === "closed" && (
          <Envelope onClick={() => setScene("open")} />
        )}

        {scene === "open" && (
          <EnvelopeOpen onClick={() => setShowLetter(true)} />
        )}

        {showLetter && (
          <>
            <div className="letter-overlay" onClick={() => setShowLetter(false)} />
            <LetterViewer />
          </>
        )}

      </div>
    </div>
  );
}
