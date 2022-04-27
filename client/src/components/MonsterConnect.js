import React from "react";
import logo from "../logo.svg";
import axios from 'axios';
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";

export class MonsterConnect extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            monsters: {
                "rathian": {
                    "name": "Rathian",
                    "summary": "a drag",
                    "type": "wyvern",
                    "weakness": ["1", "2", "3", "1", "2", "3", "1", "2", "3", "1"]
                },
            }
        };
    }


    render() {
        let monsters = this.state.monsters;
        return (
            <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <Monsterlist monsters={Object.keys(monsters)} />
            </div>
            <div class="col-9">
              <MonsterInfo monsters={ monsters } monster={ monsters.rathian } />
            </div>
          </div>
        </div>
        )
    };

}