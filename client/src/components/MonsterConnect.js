import React, {useEffect, useRef, useState} from "react";
import axios from 'axios';
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";

export const MonsterConnect = () => {
  const [monstersData, setMonsterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMonsters = async () => {
      try {
        const dataRef = await axios.get('http://localhost:8082/api/monsters');
        console.log("DataRef: ", dataRef);
        setMonsterData(dataRef.data);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(monstersData);
    if (Object.keys(monstersData).length > 0 ) {
      setLoading(false);
      console.log("Done Loading");
    } else {
      getMonsters();
      console.log("Loading...");
    }
    console.log(monstersData)
  }, [monstersData])

  if (loading) {
    console.log("Loading...")
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="Monster-list card">
            <div className="card-body">
              <Monsterlist monstersData={monstersData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
