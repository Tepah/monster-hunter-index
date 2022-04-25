import React from "react";
import logo from "../logo.svg";
import axios from 'axios';
import { Link } from 'react-router-dom';


export class Monsterlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }


  componentDidMount() {
    axios
      .get('http://localhost:8082/api/monsters')
      .then(res => {
        this.setState({
          monsters: res.data
        })
      })
      .catch(err =>{
        console.log("Error from MonsterList");
      })
  };

  render() {
    const monsters = this.state.monsters;
    console.log("PrintMonster: " + monsters);
    let monsterList;
    monsterList = monsters.map((monster, k) =>
      <Monster monster={monster} key={k} />
    );

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
  for (var i = 0; i < props.name.length; i++) {
    monsterList.push(
      <li className="monster">
        <img className="list-icon" src={logo} />
        {props.name[i]}
      </li>
    );
  }
  return monsterList;
}
