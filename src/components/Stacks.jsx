import React from "react";
import "../styles/stacks.css";

const Stacks = () => {
  const skills = [
    {
      skill: "Python",
      periodOfUse: "2년",
      useCase: ["Django 백앤드 CRUD 구성", "OpenCV 기반 문자인식 기능 구현"],
    },
    {
      skill: "JavaScript",
      periodOfUse: "2년",
      useCase: ["React 이용 UI 생성 및 API 연동", "타이머 기능 구현"],
    },
    {
      skill: "",
      periodOfUse: "",
      useCase: [""],
    },
  ];

  return (
    <header className="App-header">
      <h2>기술 스택</h2>
      <div>
        {skills.map((skill, idx) => {
          return (
            <div>
              <div>
                {idx +1}. {skill.skill}
              </div>
              <div>사용 기간 : {skill.periodOfUse}</div>
              <div>
                <div>경험</div>
                {skill.useCase.map((usecase, idx) => {
                  return (
                    <div>
                      {idx + 1}. {usecase}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Stacks;
