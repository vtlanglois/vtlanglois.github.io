import React from "react";

const SemesterTable = ({ semester, headerText }) => {
  return (
    <div className="col-lg-6 col-12">
      <h3 >{headerText}</h3>
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th>Class</th>
            <th>Number</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {semester.map((item) => {
            return (
              <tr>
                <td>AAA</td>
                <td>AAA</td>
                <td>AAA</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SemesterTable;
