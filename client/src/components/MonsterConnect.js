import React, { Component } from "react";
import axios from 'axios';
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";


export class MonsterConnect extends React.Component {
    async getData() {
        const res = await axios('http://localhost:8082/api/monsters');
        return await res.data[0];
    }

    constructor (props) {
        super(props);
        this.state = {
            monsters: {},
        }
    }
    

    componentDidMount() {
        this.getMonsters();
    }

    getMonsters = () => {
        axios 
            .get('http://localhost:8082/api/monsters')
            .then(data => this.setState({ monsters: data.data[0]}))
            .catch(err => {
                console.log(err);
                return null;
            })
    };

    render() {
        var monsters_data = this.state.monsters;
        return (
            <div className="container">
                
                {Object.keys(monsters_data).length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <div className="row">
                        <div className="col-sm-3">
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
                        </div>
                        <div className="col-9">
                        <MonsterInfo monster={ monsters_data["rathian"] } />
                        </div>
                    </div>
                )}
                
            </div>
        )
    };

}