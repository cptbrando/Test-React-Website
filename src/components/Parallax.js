import React from "react";
import "./Parallax.css";

const Parallax = () => {
  return (
    <div
      style={{
        height: "100%",
        margin: 0,
        font: '400 15px/1.8 "Lato", sans-serif',
        color: "#777",
      }}
    >
      <div className="bgimg-1">
        <div className="caption">
          <span className="border">SCROLL DOWN</span>
        </div>
      </div>

      <div
        style={{
          color: "#777",
          backgroundColor: "white",
          top: "50%",
          padding: "50px 80px",
          textAlign: "justify",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Parallax Demo</h3>
        <p>
          Parallax scrolling is a web site trend where the background content is
          moved at a different speed than the foreground content while
          scrolling. This example was built from the{" "}
          <a
            href="https://www.w3schools.com/howto/howto_css_parallax.asp"
            target="_blank"
            rel="noreferrer"
          >
            w3schools section on Parallax Scrolling
          </a>
        </p>
      </div>

      <div className="bgimg-2">
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7",
            }}
          >
            LESS HEIGHT
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            padding: "50px 80px",
            textAlign: "justify",
          }}
        >
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>

      <div className="bgimg-3">
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7",
            }}
          >
            KEEP SCROLLING
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            padding: "50px 80px",
            textAlign: "justify",
          }}
        >
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>

      <div className="bgimg-1">
        <div className="caption">
          <span className="border">SCROLL UP</span>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
