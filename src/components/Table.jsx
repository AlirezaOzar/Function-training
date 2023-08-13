import React from "react";
import "./Table.css";
const Table = ({ data, onDelete, onEdit }) => {
  const deleteHandler = (id) => {
    onDelete(id);
  };
  const editHandler = (id) => {
    onEdit(id);
  };
  return (
    <div>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th className="expand">Family</th>
              <th>Age</th>
              <th>nationalId</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((data, key) => {
              return (
                <tr key={data.key}>
                  <td>{data.name}</td>
                  <td className="expand">{data.family}</td>
                  <td className="expand">{data.age}</td>
                  <td className="expand">{data.nationalId}</td>
                  <td className="fit">
                    <span className="actions">
                      <button
                        className="delete-btn icon"
                        onClick={() => deleteHandler(data.key)}
                      >
                        Delete
                      </button>
                      <button
                        className="edit-btn"
                        onClick={() => editHandler(data.key)}
                      >
                        Edit
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
