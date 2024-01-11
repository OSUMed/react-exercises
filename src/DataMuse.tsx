import React from "react";

const DataMuse = () => {
  return (
    <div className="dataContainer">
      <h2> Hello to Synonym Website</h2>
      <h4>Place your word: Get the synonyms!</h4>
      <div className="subContainer">
        <input placeholder="Place your word here" />
        <div className="results"></div>
      </div>
    </div>
  );
};

export default DataMuse;
