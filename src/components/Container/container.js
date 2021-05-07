import API from "../../utils/employeeApi";
import React, { Component } from "react";
// Search component containes the search input box for the user to type in
import Search from "../Search/index";
// Card component will contain the employee data rendered
// nicely in a card element
import Card from "../Card/employee";

//use class if we're gonna use user interaction a.k.a state (setState).
class Container extends Component {
  state = {
    // search will start as an empty string and will change as the user types in a name
    search: "",
    // We'll be getting arrays of objects from the api call for
    // employees and employeesData.
    employees: [],
    employeesData: [],
    // the order of the results will start off as ramdom
    // and then change to ascending when the user clicks on search button
    ascending: "",
  };

  // Upon loading the page, this is what the user will see displayed
  // the states of employess and employeeData will change and will
  // display a list of random results
  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,

          employeesData: res.data.results,
        })
      )

      .catch((err) => console.log(err));
  }

  // sort results by name
  sortByName = () => {
    const filteredRes = this.state.employeesData;
    if (this.state.ascending === "asc") {
      const sorted = filteredRes.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sorted);

      this.setState({
        employeesData: sorted,
        ascending: "desc",
      });
    } else {
      const sorted = filteredRes.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log(sorted);

      this.setState({
        employeesData: sorted,
        ascending: "asc",
      });
    }
  };

  // As the user types a name, the names matching the user input will be
  // displayed on the screen.
  handleChange = (event) => {
    const employees = this.state.employees;
    // Grabbing the value of the user input
    const UserInput = event.target.value;
    const employeesData = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );

    this.setState({
      employeesData,
    });
  };

  // Api call should render random employee results when the
  // page is first loaded or refreshed
  searchEmployee = () => {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          employeesData: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  // tracks when the search button is clicked on
  // or the user presses enter.
  handleSearch = (event) => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Enter an employee name, please.");
    }
    const { employees, search } = this.state;

    const employeesData = employees.filter((employee) =>
      employee.name.first.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({
      employeesData,
    });
  };

  render() {
    return (
      <div>
        <Search
          employee={this.state.employees}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        />
        <Card results={this.state.employeesData}
        sortByName={this.sortByName} 
        />
      </div>
    );
  }
}

export default Container;