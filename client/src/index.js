import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import App from "./App";


// Where the whole page renders
class Page extends React.Component {
  render() {
    return (
      <div className="full-page">
        <div className="Title-area">
          <h1>{this.props.name}</h1>
        </div>
        <Head />
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <Monsterlist />
            </div>
            <div class="col-9">
              <MonsterInfo />
            </div>
          </div>
        </div>
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
      <div className="Monster-list card">
        <div class="card-body">
          <h2 className="List-title card-title">Monsters</h2>
          <div className="List">
            <ul>
              <li className="monster">(Monster Name 1)</li>
              <li className="monster">(Monster Name 2)</li>
              <li className="monster">(Monster Name 3)</li>
              <li className="monster">(Monster Name 4)</li>
              <li className="monster">(Monster Name 5)</li>
              <li className="monster">(Monster Name 6)</li>
              <li className="monster">(Monster Name 1)</li>
              <li className="monster">(Monster Name 2)</li>
              <li className="monster">(Monster Name 3)</li>
              <li className="monster">(Monster Name 4)</li>
              <li className="monster">(Monster Name 5)</li>
              <li className="monster">(Monster Name 6)</li>
              <li className="monster">(Monster Name 1)</li>
              <li className="monster">(Monster Name 2)</li>
              <li className="monster">(Monster Name 3)</li>
              <li className="monster">(Monster Name 4)</li>
              <li className="monster">(Monster Name 5)</li>
              <li className="monster">(Monster Name 6)</li>
              <li className="monster">(Monster Name 1)</li>
              <li className="monster">(Monster Name 2)</li>
              <li className="monster">(Monster Name 3)</li>
              <li className="monster">(Monster Name 4)</li>
              <li className="monster">(Monster Name 5)</li>
              <li className="monster">(Monster Name 6)</li>
              <li className="monster">(Monster Name 1)</li>
              <li className="monster">(Monster Name 2)</li>
              <li className="monster">(Monster Name 3)</li>
              <li className="monster">(Monster Name 4)</li>
              <li className="monster">(Monster Name 5)</li>
              <li className="monster">(Monster Name 6)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class MonsterInfo extends React.Component {
  render() {
    return (
      <div class="card">
        <div className="Monster-info card-body">
          <img className="Monster-logo" src={logo}
          alt="The Monster's type" />
          <img className="Monster-image" src={logo} 
          alt="The Monster in Question"/>
          <h2 className="Monster-name card-title">Dracula</h2>
          <div className="Summary">This monster sucks blood for a living, 
          is allergic to garlic, and can't stand werewolves taking their girls.</div>
          <div>
            <h3 className="Weakness">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/fire.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/water.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/thunder.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/ice.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/dragon.png")} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/poison.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/sleep.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/paralysis.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/explosive.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness type={require("./elements/stun.png")} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <Weakness type={require("./elements/sharp.png")} />
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

class Weakness extends React.Component {
  render() {
    return (
      <div className="Weakness-box">
        <Element type={this.props.type} />
        3
      </div>
    );
  }
}

function Element(props) {
    return <img className="element" src={props.type} alt="elem" />;
}

ReactDOM.render(
  <Page name="Monster Hunter Index" />,
  document.getElementById("root")
)

