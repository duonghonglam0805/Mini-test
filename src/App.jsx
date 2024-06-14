import Header from "./components/Header";
import Scores from "./components/Scores.jsx";
import {JAVA_RESULTS} from "./data.js";
import {PYTHON_RESULTS} from "./data.js";
import {HTML_RESULTS} from "./data.js";
import {ENGLISH_RESULTS} from "./data.js";
function App() {
  console.log(JAVA_RESULTS);
  return (
    <>
    <Header />
      <main className="scores-container">
      <Scores  courseName={"JAVA"} courseResults={JAVA_RESULTS}/>
      <Scores  courseName={"PYTHON"} courseResults={PYTHON_RESULTS}/>
      <Scores  courseName={"HTML"} courseResults={HTML_RESULTS}/>
      <Scores  courseName={"ENGLISH"} courseResults={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
