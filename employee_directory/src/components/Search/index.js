import React from "react";

//name
function Search(props) {
  let styles = {
    form: {
      maxWidth: "500px",
      margin: "15px auto",
      display: "flex",
    },
    list: {
      listStyleType: "none",
    },
  };
  //render return
  return (
    <>
      <main>
        <form id="searchForm" onSubmit={props.handleSearch} style={styles.form}>
          <input
            type="text"
            className="form-control"
            placeholder="Type employee name..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            name="search"
            onChange={props.handleChange}
            value={props.value}
            id="employees"
          />
          <button
            className="btn btn-outline-primary"
            onClick={props.handleSearch}
            type="submit"
            id="search"
          >
            Search
          </button>
        </form>
      </main>
    </>
  );
}

export default Search;
