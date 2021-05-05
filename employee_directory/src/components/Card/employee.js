import React from "react";

function Card(props) {
  // let styles = {
  //   div: {
  //     width: "18rem",
  //     margin: "10px auto",
  //   },
  // };
  return (
    <>
     <table className="tableEmployee ">
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                </tr>
            </thead>

            <tbody className= "">
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                     

                        <td> <img className="
                        "src={result.picture.medium} alt="" /></td>
                        
                        <td>{result.name.first + " " + result.name.last}  </td>

                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        
                    </tr>
                ))}
            </tbody>
        </table >

    </>
  );
}

export default Card;
