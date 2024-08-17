import React from "react";
import "../styles/stacks.css";

const Stacks = () => {
  const lang = [
    {
      name: "Python",
      periodOfUse: "2년",
      useCase: ["Django 백앤드 CRUD 구성", "OpenCV 기반 문자인식 기능 구현"],
    },
    {
      name: "JavaScript",
      periodOfUse: "2년",
      useCase: ["React 이용 UI 생성 및 API 연동", "타이머 기능 구현"],
    },
  ];

  return (
    <header className="App-header">
      <h2>언어</h2>
      <div>
        {lang.map((lang, idx) => {
          return (
            <div>
              <div>
                {idx +1}. {lang.name}
              </div>
              <div>사용 기간 : {lang.periodOfUse}</div>
              <div>
                <div>경험</div>
                {lang.useCase.map((usecase, idx) => {
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
