import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "boxicons";

const App = () => {
  let menuItems = [
    {
      name: "Eduhance",
      iconName: "menu",
    },
    {
      name: "Home",
      iconName: "home",
      type: "solid",
    },
    {
      name: "Explore",
      iconName: "compass",
      type: "solid",
    },
    {
      name: "Messages",
      iconName: "envelope",
      type: "solid",
    },
    {
      name: "Resources",
      iconName: "spreadsheet",
      type: "solid",
    },
    {
      name: "Starred",
      iconName: "star",
      type: "solid",
    },
    {
      name: "Settings",
      iconName: "cog",
      type: "solid",
    },
    {
      name: "Log Out",
      iconName: "log-out",
      color: "red",
      rotate: "180",
    },
  ];
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(false);
  let delay = 1;
  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [active]);
  return (
    <div className={`sidebar ${expanded && "expanded"}`}>
      {menuItems.map((item, index) => {
        let middle = false;
        if (!(index === 0 || index === menuItems.length - 1)) {
          middle = true;
        }
        return (
          <div
            className={`boxicon-container ${
              expanded && "expanded-boxicon-container"
            }`}
            onMouseEnter={() => {
              if (middle) {
                setHovered(index);
              }
            }}
            onMouseLeave={() => {
              if (middle) {
                setHovered(null);
              }
            }}
            onClick={() => {
              if (middle) {
                setActive(index);
              }
              if (index === 0) {
                setExpanded(!expanded);
              }
            }}
            key={index}
          >
            <box-icon
              class={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === index && "active"}
                      `}
              size="md"
              name={item.iconName}
              type={item.type}
              color={
                hovered === index || active === index ? "white" : item.color
              }
              animation={active === index && animate ? "tada" : ""}
              rotate={item.rotate}
            ></box-icon>
            <p
              className={`description 
            ${expanded && "show-description"}
            ${active === index && "active-description"}`}
            >
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
