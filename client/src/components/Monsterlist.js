import React from "react";
import logo from "../logo.svg";
import axios from 'axios';
import { Link } from 'react-router-dom';


export class Monsterlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const monsters = this.props.monsters;
    console.log("PrintMonster: " + monsters);
    let monsterList;
    monsterList = <Monster monsters={monsters} />;

    return (
      <div className="Monster-list card">
        <div class="card-body">
          <h2 className="List-title card-title">Monsters</h2>
          <div className="List">
            <ul>
              {monsterList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function Monster(props) {
  var monsterList = [];
  for (var i = 0; i < props.monsters.length; i++) {
    monsterList.push(
      <li className="monster">
        <img className="list-icon" src={logo} />
        {props.monsters[i]}
      </li>
    );
  }
  return monsterList;
}
