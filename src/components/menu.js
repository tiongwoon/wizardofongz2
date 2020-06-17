import React from "react"

import { Link } from "gatsby"

export default function Menu() {
  function dropDownTrigger() {
    var x = document.getElementById("smallMenu")
    if (x.className === "dropdown-container") {
      x.className += " showcontent"
    } else {
      x.className = "dropdown-container"
    }
  }

  return (
    <div
      style={{
        position: "relative",
        paddingTop: "5vh",
        zIndex: "999",
        height: "80px",
      }}
    >
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <nav
        className="big-screen-menu"
        style={{
          background: "none",
          position: "absolute",
          right: "0",
          width: "50%",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-evenly",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "800",
          }}
        >
          <li>
            <Link to="/writings">Writings</Link>
          </li>
          <li>
            <Link to="/rtwk">RTWK</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <nav role="navigation" className="dropdown-container" id="smallMenu">
        <div
          onClick={dropDownTrigger}
          className="dropdown-menu-icon"
        >
          &#9776;
        </div>
        <ul>
          <li>
            <Link
              className="normal-text-yellow dropdown-list-item"
              to="/writings"
            >
              Writings
            </Link>
          </li>
          <li>
            <Link className="normal-text-yellow dropdown-list-item" to="/rtwk">
              RTWK
            </Link>
          </li>
          <li>
            <Link className="normal-text-yellow dropdown-list-item" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
