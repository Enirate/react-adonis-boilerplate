import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CoronaImg from "./corona.png";

const App = () => {
  const [status, setStatus] = useState("idle");
  const [resources, setResources] = useState([]);

  const getResources = async () => {
    try {
      setStatus("pending");
      const response = await axios.get("http://localhost:3333/api/v1/resources", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      if (response.data) {
        setResources(response.data.data);
        setStatus("resolved");
      }
    } catch (error) {
      setStatus("rejected");
    }
  };

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <div className="shadow flex flex-col w-3/5 mb-24">
        <div className="w-full">
          <img className="h-auto" src={CoronaImg} alt="" />
        </div>
        <div className="w-full mt-5">
          <h1 className="font-bold text-purple-500 text-xl mb-2 text-center">
            Covid-19
          </h1>
          <div className="px-4 mb-4">
            <h3 className="text-purple-500 font-bold">Introduction</h3>
            <p className="text-xs text-justify">
              Coronavirus disease (COVID-19) is an infectious disease caused by a new
              virus. The disease causes respiratory illness (like the flu) with
              symptoms such as a cough, fever, and in more severe cases, difficulty
              breathing. You can protect yourself by washing your hands frequently,
              avoiding touching your face, and avoiding close contact (1 meter or 3
              feet) with people who are unwell.
            </p>
          </div>
          <div className="px-4 mb-4">
            <h3 className="text-purple-500 font-bold">Symptoms</h3>
            <p className="text-xs text-justify">
              People may be sick with the virus for 1 to 14 days before developing
              symptoms. The most common symptoms of coronavirus disease (COVID-19)
              are fever, tiredness, and dry cough. Most people (about 80%) recover
              from the disease without needing special treatment. More rarely, the
              disease can be serious and even fatal. Older people, and people with
              other medical conditions (such as asthma, diabetes, or heart disease),
              may be more vulnerable to becoming severely ill. People may experience:
              cough fever tiredness difficulty breathing (severe cases)
            </p>
          </div>
          <div className="px-4 mb-4">
            <h3 className="text-purple-500 font-bold">Resources</h3>
            {status === "pending" && (
              <span className="text-xs font-bold">Loading resources...</span>
            )}
            {status === "rejected" && (
              <span className="text-xs font-bold">Failed to load resources</span>
            )}
            {status === "resolved" && (
              <ul>
                {resources.map(({ id, name, url }) => (
                  <li key={id}>
                    <span className="text-xs text-teal-900  font-bold">
                      {name}:{" "}
                      <a className="text-purple-500" href={url}>
                        Link
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
