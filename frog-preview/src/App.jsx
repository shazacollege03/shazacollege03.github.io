import React from "react";
import Frog from "./Frog";
import Envelope from "./Envelope";
import EnvelopeOpen from "./EnvelopeOpen";
import "./style.css";

export default function App() {
  return (
    <div className="app">
        <div className="scene">
          <Frog  />
          <Envelope />
          <EnvelopeOpen className="envelope-float" />
        </div>
      </div>
  );
}
