import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MonsterConnect } from "./components/MonsterConnect";
import {MonsterContext} from "./components/MonsterContext";


// Where the whole page renders
const App = (props) => {
  const [currentMonster, setCurrentMonster] = useState("None");
  return (
    <MonsterContext.Provider value={{currentMonster, setCurrentMonster}}>
      <div className="full-page">
        <div className="Title-area">
          <h1>{props.name}</h1>
        </div>
        <Head />
        <MonsterConnect  />
      </div>
    </MonsterContext.Provider>
  );
}


class Head extends React.Component {
  render() {
    return (
      <head>
        <title>Monster Hunter Index</title>
      </head>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
)

