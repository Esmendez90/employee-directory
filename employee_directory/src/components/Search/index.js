import React, { Component } from "react";
import API from "../../utils/employeeApi"

//name
//use class if we're gonna use user interaction a.k.a state (setState).
class Search extends Component {
    state = {
        employeeName: ""
    }

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        // console.log(name, value);
        // This allows me to get the value in the input field that the user types. Now, I want to 
        // connect it to an API.
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        window.debugEvent = event;
        console.log(event);
    }

  render() {
    let styles = {
      form: {
        maxWidth: "500px",
        margin: "15px auto",
        display: "flex",
      },
    };
    //render return
    return (
      <>
        <form id="searchForm" onSubmit={this.handleSubmit} style={styles.form}>
          <input
            type="text"
            className="form-control"
            placeholder="Type employee name..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            name="employeeName"
            onChange={this.handleChange}
            value={this.state.employeeName}
            id="employeeName"
          />
          <button className="btn btn-outline-primary" 
          onSubmit={this.handleSubmit} 
          type="submit" 
          id="search">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Search;
