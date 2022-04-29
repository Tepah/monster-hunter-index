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
    }
    

    componentDidMount() {
        console.log("Component mounting...");
        axios
            .get('http://localhost:8082/api/monsters')
            .then(res => {
                this.setState({
                    monsters: res.data[0]
                });
                console.log(res.data);
                console.log(this.state.monsters);
            })
            .catch(err =>{
                console.log("Error from MonsterConnect");
            })
    }


    render() {
        var monsters_data = this.state.monsters;
        var monster_list_show = <Monsterlist monsters={Object.keys(monsters_data)} />
        var show_monster = <MonsterInfo monsters={ monsters_data["rathian"] } monster={ monsters_data["rathian"] } />
        return (
            <div className="container">
          <div className="row">
            <div className="col-sm-3">
              {monster_list_show}
            </div>
            <div className="col-9">
              {show_monster}
            </div>
          </div>
        </div>
        )
    };

}