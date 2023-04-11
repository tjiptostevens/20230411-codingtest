import React from "react";

const TableUser = (props) => {
  // function for passing the data to parent
  const handleDelete = (e, id) => {
    e.preventDefault();
    props.handleDelete(id);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {props.dataFil &&
          props.dataFil.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <button onClick={(e) => handleDelete(e, d.id)}>x</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableUser;
