import React, { useState } from "react";
import QuestForm from "./components/QuestForm";
import Test from "./components/Test";
import QuizIcon from "../src/Assets/logo 1.png";
import ProgramTable from "./components/ProgramTable";

const App = () => {
  const [programData, setProgramData] = useState(null);
  return (
    <div className="container">
      <div className="navbar">Medversity</div>
      {programData === null ? (
        <QuestForm setProgramData={setProgramData} />
      ) : (
        <ProgramTable programData={programData} />
      )}
      {/* <Test /> */}
    </div>
  );
};

export default App;
