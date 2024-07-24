import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import backimg from "./backimg.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import Aboutimg from "./About.png";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <img
          src={backimg}
          alt="GET OFF of DEPRESSION"
          className="header-image"
        />
      </header>

      <main className="main-content">
        <div className="about-section">
          <img src={Aboutimg} alt="About" className="about-img" />
          <h1>
            Depression,
            <br /> the enemy of modern man
          </h1>
          <p>
            우울증 환자 1000만 시대, 현대인들에게 우울과 불안은 감기와도 같다.
            <br /> 누구나 살아가는 과정에 스트레스와 우울을 느낄 수 있지만 그
            정도가 심해지면 건강을 심하게 해칠 수 있다.
          </p>
        </div>

        <div className="features">
          <div className="feature-item">
            <div className="feature-icon">1</div>
            <p>기분이 저하된 경험상실이 지속적으로 있나요?</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">2</div>
            <p>삶의 즐거움, 재미를 상실 하며, 무기력 느끼는 편인가요?</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">3</div>
            <p>건강하고 규칙적인 생활을 하지는 못하 하나요?</p>
          </div>
        </div>

        <div className="recovery-section">
          <p>
            HOW DO I RECOVER? HOW DO I RECOVER? HOW DO I RECOVER? HOW DO I
            RECOVER? HOW DO I RECOVER? HOW DO I RECOVER?
          </p>
        </div>
      </main>

      <section className="what-can-we-do">
        <h2>What can we do to help overcome this?</h2>
        <p>우울증을 극복하기 위해 우리가 할 수 있는 일</p>

        <div className="steps">
          <div className="step">
            <img src={image1} alt="Step 1" />
            <div className="step-description">
              <h3>Step 1</h3>
              <p>
                올바로게 감정 일기를 작성하여
                <br />
                자신 마음을 해소하세요
              </p>
              <p>
                자신에 대해 이해하고 자존감 증진을 위해 쓰는 것으로,
                <br />
                우울한 생각을 잘로 나눠 문제를 해결하고
                <br />
                자신을 통찰하는 강력한 방법이 될 수 있습니다.
              </p>
            </div>
          </div>
          <div className="step">
            <img src={image2} alt="Step 2" />
            <div className="step-description">
              <h3>Step 2</h3>
              <p>
                오늘 하루에 대한
                <br />
                AI 감정 피드백을 확인하세요
              </p>
              <p>
                하루를 정리하면서 자신의 감정 상태를 체크하세요.
                <br />
                일기가와 매니저 AI가 듬뿍 응원과 격려를 드립니다.
              </p>
            </div>
          </div>
          <div className="step">
            <img src={image3} alt="Step 3" />
            <div className="step-description">
              <h3>Step 3</h3>
              <p>
                어떠한 어려움이 있나요?
                <br />
                AI 우울 감정 분석 결과를 확인하세요
              </p>
              <p>
                한달 동안 그래프화 해놓은 우울 감정을 한눈에 볼 수 있으며
                <br />
                작성 시간대 및 주요 키워드를 분석하여
                <br />
                자신 감정 상태 개선에 활용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>개인정보 처리방침 Privacy Policy</p>
            <p>
              명이현(FE) 박준혁(FE) 성지훈(FE) 차경태(BE) 박준용(BE) 강나영(DE)
            </p>
            <p>ALL RIGHTS RESERVED 2024 © Cheonan Metropolitan City</p>
          </div>
          <div className="footer-image">
            <img
              src="/path-to-your-circular-image.png"
              alt="Logo"
              className="footer-logo"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
