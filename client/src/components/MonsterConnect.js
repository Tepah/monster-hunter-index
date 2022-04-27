import React, { Component } from "react";
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
    

    async componentDidMount() {
        axios
            .get('http://localhost:8082/api/monsters')
            .then(res => {
                this.setState({
                    monsters: res.data
                })
                console.log("complete!");
            })
            .catch(err =>{
                console.log("Error from MonsterConnect");
            })
    };


    render() {
        var monsters_data = this.state.monsters;
        var monster_list_show = <Monsterlist monsters={Object.keys(monsters_data[0])} />
        var show_monster = <MonsterInfo monsters={ monsters_data[0]["rathian"] } monster={ monsters_data[0]["monsters"]["rathian"] } />
        return (
            <div class="container">
          <div class="row">
            <div class="col-sm-3">
              {monster_list_show}
            </div>
            <div class="col-9">
              {show_monster}
            </div>
          </div>
        </div>
        )
    };

}