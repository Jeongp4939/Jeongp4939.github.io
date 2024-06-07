import "./App.css";
import React, { useRef } from "react";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";

function App() {
  const curRef1 = useRef(null);
  const curRef2 = useRef(null);
  const curRef3 = useRef(null);
  const curRef4 = useRef(null);

  const sccurRef1 = () =>
    curRef1.current.scrollIntoView({ behavior: "smooth" });
  const sccurRef2 = () =>
    curRef2.current.scrollIntoView({ behavior: "smooth" });
  const sccurRef3 = () =>
    curRef3.current.scrollIntoView({ behavior: "smooth" });
  const sccurRef4 = () =>
    curRef4.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <Navbar
        sccurRef1={sccurRef1}
        sccurRef2={sccurRef2}
        sccurRef3={sccurRef3}
        sccurRef4={sccurRef4}
      />
      <div ref={curRef1}>
        <MainPage />
      </div>
      <div ref={curRef2}>
        <Projects />
      </div>
      <div ref={curRef3}>
        <MainPage />
      </div>
      <div ref={curRef4}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
