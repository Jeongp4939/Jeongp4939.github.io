import "./App.css";
import React, { useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import Stacks from "./components/Stacks";
import Contact from "./components/Contact";

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

  // 마우스 휠이 작동함에 따라 페이지 단위로 스크롤 되도록 하기 위해 useEffect를 이용해 상태 감지
  useEffect(() => {
    const sections = [curRef1, curRef2, curRef3, curRef4];
    let curSectionIndex = 0;
    let isThrottling = false;

    const handleScroll = (event) => {
      if (isThrottling) return;
      isThrottling = true;

      const deltaY = event.deltaY;
      if (deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }

      // 너무 민감하게 반응하여 딜레이를 주기위한 setTimeout 사용
      setTimeout(() => {
        isThrottling = false;
      }, 500);
    };


    const handleNext = () => {
      if (curSectionIndex < sections.length - 1) {
        curSectionIndex += 1;
        sections[curSectionIndex].current.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const handlePrev = () => {
      if (curSectionIndex > 0) {
        curSectionIndex -= 1;
        sections[curSectionIndex].current.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

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
        <Stacks />
      </div>
      <div ref={curRef4}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
