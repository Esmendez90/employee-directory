//import axios for api calls
import axios from "axios";

export default {
  // https://randomuser.me/api/

  // another way of writing the api call
  // getByEmployee: employeeName => {
  //     return axios.get(`https://randomuser.me/api/?inc=${employeeName}`);
  // }

  // when you dont have the curly braces on an ES6 functions, it will return 
  // the right handside evalutation...since its only one line.
  getByEmployee: (employeeName) =>
    axios.get(`https://randomuser.me/api/?inc=${employeeName}`),
};
