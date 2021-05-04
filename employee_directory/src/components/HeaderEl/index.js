// I should create the header that will be
// a constant element on my page
import React from "react";
// import { Link } from "react-router-dom";

function HeaderEl() {
  let styles = {
    header: {
      maxWidth: "100%",
      margin: "0px auto 10px ",
      height: "200px",
      backgroundColor: "#FED766",
      color: "white",
      textShadow: "1px 1px black",
    },
    h1: {
      position: "relative",
      top: "35%",
    },
  };

  return (
    <>
      <header style={styles.header}>
        <h1 style={styles.h1}>Employee Directory</h1>
      </header>
    </>
  );
}

export default HeaderEl;
