import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


// Where the whole page renders
class Page extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Monsterlist />
        <MonsterInfo />
      </div>
    );
  }
}


class Monsterlist extends React.Component {
  render() {
    return (
      <div className="Monster-list">
        <h2 className="List-title">Monsters</h2>
        <div className="List">
          <ul>
            <li>(Monster Name 1)</li>
            <li>(Monster Name 2)</li>
            <li>(Monster Name 3)</li>
          </ul>
        </div>
      </div>
    );
  }
}

class MonsterInfo extends React.Component {
  render() {
    return (
      <div className="Monster-info">
        <h2 className="Monster-name">Dracula</h2>
        <div className="Summary">This monster sucks blood for a living, 
        is allergic to garlic, and can't stand werewolves taking their girls.</div>
        <div>
          <h3 className="Weakness">
            <Weakness type="Fire" />
            <Weakness type="Water" />
            <Weakness type="Thunder" />
            <Weakness type="Ice" />
            <Weakness type="Dragon" />
            <Weakness type="Poison" />
            <Weakness type="Sleep" />
            <Weakness type="Paralysis" />
            <Weakness type="Explosive" />
            <Weakness type="Stun" />
            <Weakness type="Sharp" />
          </h3>
        </div>
      </div>
    );
  }
}

class Weakness extends React.Component {
  render() {
    return (
      <div className="Weakness-box">3</div>
    );
  }
}

ReactDOM.render(
  <Page name="Monster Hunter Index" />,
  document.getElementById("root")
)

