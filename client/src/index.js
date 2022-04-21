import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import App from "./App";


// Where the whole page renders
class Page extends React.Component {
  render() {
    return (
      <div>
        <div className="Title-area">
          <h1>{this.props.name}</h1>
        </div>
        <Head />
        <Monsterlist />
        <MonsterInfo />
      </div>
    );
  }
}


class Head extends React.Component {
  render() {
    return (
      <head>
        <title>Monster Hunter Index</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
      </head>
    )
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
        <img className="Monster-logo" src={logo}
        alt="The Monster's type" />
        <img className="Monster-image" src={logo} 
        alt="The Monster in Question"/>
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

