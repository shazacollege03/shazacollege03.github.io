import React from "react";
import Frog from "./Frog";
import Envelope from "./Envelope";
import "./style.css";

export default function App() {
  return (
    <div className="app">
      <div style={{ width: "400px", height: "400px" }}>
        <Frog className="frog-hop" />
        <Envelope className="envelope-float"/>
      </div>
    </div>
  );
}
