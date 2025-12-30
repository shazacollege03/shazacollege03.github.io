import React, { useState } from "react";
import Frog from "./Frog";
import Envelope from "./Envelope";
import EnvelopeOpen from "./EnvelopeOpen";
import ClickMe from "./clickMe";
import "./style.css";

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  return (
    <div className="app">
        <div className="scene">
          <Frog  />
          <ClickMe />
          {!isEnvelopeOpen ? (
          <Envelope onClick={() => setIsEnvelopeOpen(true)} />
        ) : (
          <EnvelopeOpen />
        )}
        </div>
      </div>
  );
}
