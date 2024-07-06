import React, { useRef, useState } from "react";
import "../styles/projects.css";

const Projects = () => {
  const projectDetails = [
    {
      projectId: 1,
      title: "Make It Louder!",
      date: "2023.10 ~ 2023.11",
      persons: "5",
      info: "음성을 이용한 기믹이 추가된 점프 플랫포머 게임",
      part: "Client, Map Design",
      making: "Player 및 Objects 동작 구현, 맵 디자인 및 제작",
      img: [1, 2, 3],
    },
    {
      projectId: 2,
      title: "Cavendish",
      date: "2023.08 ~ 2023.10",
      persons: "6",
      info: "조립컴퓨터 본체를 추천해주는 웹서비스",
      part: "FE, DATA",
      making:
        "UI 제작 및 디자인, 크롤링을 통한 부품 데이터 수집, 부품 데이터 전처리, API 연동",
      img: [1, 2, 3],
    },
    {
      projectId: 3,
      title: "꿈타",
      date: "2023.07 ~ 2023.08",
      persons: "6",
      info: "온라인에서 관리 및 공유가 가능한 멀티타이머 디바이스",
      part: "FE",
      making: "WEB, Device UI 제작 및 디자인, 타이머 제작, API 연동",
      img: [1, 2, 3],
    },
    {
      projectId: 4,
      title: "DAGACHI",
      date: "2021.8 ~ 2021.11",
      persons: "4",
      info: "이미지에 있는 글자를 추출해 폰트를 찾아주는 서비스",
      part: "이미지 내 폰트 인식, 학습이미지 생성",
      making:
        "OpenCV를 이용한 이미지 내 문자영역 추출, Pilow라이브러리를 활용해 학습데이터 생성",
      img: [1,2,3],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectDetails.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <header className="App-header">
      <h2>Projects</h2>
      {/* Carousel로 구성, 옆으로 넘길 수 있도록 */}
      <div className="carousel-container">
        <button
          className="slide-arrow"
          id="slide-arrow-prev"
          onClick={handlePrev}
        >
          &#8249;
        </button>
        <div className="content-container">
          {projectDetails.map((project, idx) => (
            <div
              className={`content ${
                idx === currentIndex ? "active" : "inactive"
              }`}
              key={project.projectId}
            >
              <div className="content-title">{project.title}</div>
              <div className="content-images">
                {project.img.map((src, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={`images/${project.projectId}-${src}.png`}
                    alt={`project-${project.projectId}-${imgIdx}`}
                  />
                ))}
              </div>
              <div className="content-detail">
                <div>
                  기간 : {project.date} / 인원 : {project.persons}인
                </div>
                <div>개요 : {project.info}</div>
                <div>담당 역할 : {project.part}</div>
                <div>제작 : {project.making}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="slide-arrow"
          id="slide-arrow-next"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>
    </header>
  );
};

export default Projects;
