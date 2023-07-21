import React from "react";
import RevealText from "../components/revealText";
import Fade from "react-reveal/Fade";
import IconPad from "../components/ıconsPad";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/wave2.json";
import Slick from "../components/slick";
import { Link } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Intro() {
  const [state, setState] = React.useState(0);
  const [timer, setTimer] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setState(state + 1);
    }, 2000);
  }, [state]);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 2400);
  }, []);

  return (
    <div id="intro" className="wrapper ">
      <div className="relative">
        <div class="spine">
          {timer && (
            <Lottie
              options={defaultOptions}
              style={{
                position: "absolute",
                transition: "opacity 2s",
                width: 600,
                height: 600,
                top: -302,
                left: -300,
                zIndex: -55,
              }}
            />
          )}
        </div>
        <div class="spine-target">
          <div class="circle relative"></div>
          <div class="pulse"></div>
        </div>
      </div>
      <section class="scene-intro " id="intro">
        <div class="static-container ">
          <h1 class="title">
            <span class="tag-arrow">
              {" "}
              {"<"} <span class="tag">kanan gasimov</span>{" "}
              <span class="attr">class</span> <span class="equal">=</span>
              <span class="string">
                {"'"}
                <RevealText />
                {"'"}
              </span>
              {"/>"}
            </span>
          </h1>

          <div class="std">
            <p class="-gray">// Frontend web and mobile developer,</p>
          </div>
          <div className="about-grid row">
            <div className="columns ">
              <h2>Main skills</h2>
              <ul>
                <li>
                  HTML, CSS, JavaScript
                  <br />
                  React.js, Redux Toolkit,
                  <br />
                  React Native
                </li>
                <li>
                  Angular.js
                  <br />
                </li>
                <li>
                  Ionic
                  <br />
                </li>
                <br />
                <li>
                  Rest Api, RapidApi, Firebase
                  <br />
                </li>
                <br />

                <li>
                  Tailwind.css, Bootstrap, Material UI,
                  <br />
                  Ant Design, RSuite.js, Chart.js,
                </li>
                <br />
              </ul>
            </div>

            <div className="columns ">
              <h2>Experience</h2>

              <ul>
                {/* <li>
                  <b className="-purple">Self-Learn developer</b>
                  <br />
                  2019 - now
                </li> */}
                <li>
                  <b className="-purple"> Frontend developer</b>
                  <br />
                  at{" "}
                  <a href="https://www.linkedin.com/company/teknodev/mycompany">
                    Teknodev
                  </a>
                  <br />
                  2023 - now
                </li>
                <br />
                <li>
                  <b className="-purple"> Co-founder</b>
                  <br />
                  at <a href="https://metaliga.io/">Metaliga</a>
                  <br />
                  2022 - now
                </li>
                <li>
                  <b className="-purple"> Frontend developer</b>
                  <br />
                  at <a href="https://www.jelibot.com/">SSAT JELIBOT</a>
                  <br />
                  2022 - 2023
                </li>
              </ul>
            </div>
          </div>
          {/* <h1 class="title">
            <span class="tag-arrow">
              {" "}
              {"<"} <span class="tag">co-founder</span>{" "}
              <span class="attr">of</span> <span class="equal">=</span>
              <span class="string">
                {"{"}
                <a
                  href="https://metaliga.io"
                  style={{ color: "var(--orange)" }}
                >
                  metaliga
                </a>
                {"}"}
              </span>
              {"/>"}
            </span>
          </h1> */}
          <div className="row  leftAnimate zin hoverMe"></div>
        </div>
      </section>
      <Slick></Slick>
      <style jsx>
        {`
          .row {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
          }

          .about-grid {
            padding: 3rem 2rem 0 0;
            margin-right: -25vw;
            width: 75vw;
          }

          h2 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .columns {
            margin-bottom: 2rem;
            margin-right: 3rem;
          }

          ul {
            display: grid;
            grid-template: 1fr / repeat(4, 1fr);
            grid-gap: 2rem;
            grid-row-gap: 1rem;
          }

          li {
            list-style: none;
            margin: 0;
            font-size: 1rem;
            line-height: 1.5em;
            color: var(--gray);
          }

          .tools {
            display: grid;
            grid-template: 1fr / repeat(4, 1fr);
            grid-gap: 2rem;
            grid-row-gap: 1rem;
          }
          .fluent {
            display: grid;
            grid-template: 1fr / repeat(4, 1fr);
            grid-gap: 2rem;
            grid-row-gap: 1rem;
          }
          ul {
            display: block;
          }
          @media only screen and (max-width: 600px) {
            .row {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
            }
          }

          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
          }

          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
          }

          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
          }

          /* Extra large devices (large laptops and desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
          }
        `}
      </style>
    </div>
  );
}
