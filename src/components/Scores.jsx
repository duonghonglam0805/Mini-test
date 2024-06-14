import React from 'react';

function Scores(props) {
    const { courseName, courseResults } = props;
  return (
    <div className="scores">
      <h1>{courseName}</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scores;
