import React from "react";
import logo from "../logo.svg";


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
        <div className="card-body">
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
    if (props.monsters[i] !== "games" && props.monsters[i] !== "weakness"
    && props.monsters[i] !== "_id" ) {
      monsterList.push(
        <li className="monster">
          <img className="list-icon" src="./pictures/icons/{rathian}" />
          {props.monsters[i].charAt(0).toUpperCase() + props.monsters[i].slice(1)}
        </li>
      );
    };
  }
  return monsterList;
}
