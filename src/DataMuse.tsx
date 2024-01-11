import React, { useState } from "react";
import axios, { AxiosError } from "axios";
// TODO: User input and return a list of synonyms for it
// API endpoint: rel_syn="WORD"
// API Base URL: https://api.datamuse.com
// Returning a list
// List[] --> { word, score }
// Iterate through list using map(data)
// make a span tag with data.word
const URL = "https://api.datamuse.com/words";

const DataMuse = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [apiResults, setApiResults] = useState<any[]>([]);

  const getSyn = async () => {
    const fetchUrl = `${URL}?rel_syn=${userInput}`;
    console.log("Fetching API..");
    try {
      const results = await axios.get(fetchUrl);
      setApiResults(results.data);
      console.log("results are: ", results);
    } catch (error: AxiosError) {
      console.error(`Error fetching: ${error}`);
    }
    // fetch()
    //   .then((response) => response.json())
    //   .then((data) => setResults(data));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getSyn();
  };
  return (
    <div className="dataContainer">
      <h2> Hello to Synonym Website</h2>
      <h4>Place your word: Get the synonyms!</h4>
      <form onSubmit={handleSubmit}>
        <div className="subContainer">
          <input
            type="text"
            name="api"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Place your word here"
          />
          <button type="submit">Get Synonym(s)</button>
          <div className="results"></div>
        </div>
      </form>
      <ul>
        {apiResults.map((data, index) => {
          return <li key={index}>{data?.word}</li>;
        })}
      </ul>
      {userInput}
    </div>
  );
};

export default DataMuse;
