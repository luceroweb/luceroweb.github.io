import React from "react";
import face from "./images/face.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <strong>Juan</strong> Lucero | <small>SENIOR WEB DEVELOPER</small>
      </header>
      <main>
        <div>
          <h1>22 years moving user focused businesses forward</h1>
          <p>
            For the past 22 years, I've enjoyed building collaborative team
            projects that put your users first. If your user thinks “what's this
            for?” then the job isn't done yet. Happy users come back to your
            business again and again; happy teams work harder, faster, and take
            pride in their work. Invite me to do this for your business.
          </p>
        </div>
        <div>
          <img src={face} alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
