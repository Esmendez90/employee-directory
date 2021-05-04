import React from "react";

function Card() {
  let styles = {
    div: {
      width: "18rem",
      margin: "10px auto",
    },
  };
  return (
    <>
      <div className="card" style={styles.div}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <p className="card-text">Some info.</p>
          <p className="card-text">Some info.</p>
          <p className="card-text">Some info.</p>
        </div>
      </div>
    </>
  );
}

export default Card;
