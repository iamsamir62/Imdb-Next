import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return (
          // Add the return statement here
          <div key={result.id}>
            <h2 className="text-white">{result.original_title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
