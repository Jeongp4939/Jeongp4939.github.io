import React from "react";

const Projects = () => {
  return (
    <header className="App-header">
      <h2>Projects</h2>
      {/* Carousel로 구성, 옆으로 넘길 수 있도록 */}
      <div>
        <div>프로젝트명 : {}</div>
        <div>기간 : {} / 인원 : {}</div>
        <div>프로젝트 개요 : {}</div>
      </div>
    </header>
  );
};

export default Projects;
