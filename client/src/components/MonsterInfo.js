import React from "react";
import logo from "../logo.svg";

export class MonsterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: "Dracula",
      type: "Fiction",
      games: ["Pokemon", "Naruto", "Demon Salver"],
      summary: "This monster sucks blood for a living, is allergic to garlic, and can't stand werewolves taking their girls.",
      weakness: ["3", "2", "1", "2", "0", "1", "3", "2", "0", "2", "O"]
    };
  }

  render() {
    return (
      <div class="card">
        <div className="Monster-info card-body">
          <img className="Monster-logo" src={logo}
            alt="The Monster's type" />
          <img className="Monster-image" src={logo}
            alt="The Monster in Question" />
          <h2 className="Monster-name card-title">{this.state.monster}</h2>
          <div className="monster-type">Monster Type: {this.state.type}</div>
          <div className="games-included">
            Featured in:
            <ul className="Gamelist">
              <li>Pokemon</li>
            </ul>
          </div>
          <div className="Summary">{this.state.summary}</div>
          <div>
            <h3 className="Weakness">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[0]} type={require("../elements/fire.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[1]} type={require("../elements/water.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[2]} type={require("../elements/thunder.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[3]} type={require("../elements/ice.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[4]} type={require("../elements/dragon.png")} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[5]} type={require("../elements/poison.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[6]} type={require("../elements/sleep.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[7]} type={require("../elements/paralysis.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[8]} type={require("../elements/explosive.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={this.state.weakness[9]} type={require("../elements/stun.png")} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <Weakness value={this.state.weakness[10]} type={require("../elements/sharp.png")} />
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
        {this.props.value}
      </div>
    );
  }
}
function Element(props) {
  return <img className="element" src={props.type} alt="elem" />;
}
