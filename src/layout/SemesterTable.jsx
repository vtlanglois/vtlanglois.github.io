import React from 'react';

const SemesterTable = () => {
  return (
      <div className="col-lg-6 col-12">
        <table className='table table-sm table-striped'>
          <thead>
            <tr>
              <th>Class</th>
              <th>Number</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intro to CS</td>
              <td>CSCI-H211</td>
              <td>A</td>
            </tr>
            <tr>
              <td>Intro to CS</td>
              <td>CSCI-H211</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default SemesterTable;
