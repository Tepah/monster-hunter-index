import React, { Component } from "react";
import logo from "../logo.svg";
import axios from 'axios';
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";

export class MonsterConnect extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            monsters: {},
        }
    };
    

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/monsters')
            .then(res => {
                this.setState({
                    monsters: res.data
                })
            })
            .catch(err =>{
                console.log("Error from MonsterConnect");
            })
    };


    render() {
        const list = ["1", "2"]
        const monsters = {
            "rathian": {
                "name": "Rathian",
                "type": "Wyvern",
                "summary": "\"A big dragon\"",
                "games": [
                    "Monster Hunter World"
                ],
                "weakness": [
                    "0",
                    "2",
                    "3",
                    "1",
                    "2",
                    "3",
                    "0",
                    "2",
                    "1",
                    "0",
                    "O"
                ]
            }
        }
        return (
            <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <Monsterlist monsters={list} />
            </div>
            <div class="col-9">
              <MonsterInfo monsters={ monsters } monster={ monsters["rathian"] } />
            </div>
          </div>
        </div>
        )
    };

}