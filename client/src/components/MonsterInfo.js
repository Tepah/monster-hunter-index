import React from "react";
import logo from "../logo.svg";
import axios from 'axios';
import { Link } from 'react-router-dom';

export class MonsterInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/monsters/'+this.props.match.params.name)
      .then(res => {
        this.setState({
          monster: res.data
        })
      })
      .catch(err => {
        console.log("Error from MonsterInfo");
      })
  };

  render() {
    const monster = this.state.monster;

    return (
      <div class="card">
        <div className="Monster-info card-body">
          <img className="Monster-logo" src={logo}
            alt="The Monster's type" />
          <img className="Monster-image" src={logo}
            alt="The Monster in Question" />
          <h2 className="Monster-name card-title">{monster.name}</h2>
          <div className="monster-type">Monster Type: {monster.type}</div>
          <div className="games-included">
            Featured in:
            <ul className="Gamelist">
              <li>Pokemon</li>
            </ul>
          </div>
          <div className="Summary">{monster.summary}</div>
          <div>
            <h3 className="Weakness">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[0]} type={require("../elements/fire.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[1]} type={require("../elements/water.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[2]} type={require("../elements/thunder.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[3]} type={require("../elements/ice.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[4]} type={require("../elements/dragon.png")} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[5]} type={require("../elements/poison.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[6]} type={require("../elements/sleep.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[7]} type={require("../elements/paralysis.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[8]} type={require("../elements/explosive.png")} />
                  </div>
                  <div className="col-lg-2">
                    <Weakness value={monster.weakness[9]} type={require("../elements/stun.png")} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <Weakness value={monster.weakness[10]} type={require("../elements/sharp.png")} />
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
