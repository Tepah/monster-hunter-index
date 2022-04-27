import React from "react";
import logo from "../logo.svg";
import axios from 'axios';
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";

export class MonsterConnect extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            monsters: {}
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
        return (
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
        )
    };

}