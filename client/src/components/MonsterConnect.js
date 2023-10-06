import React, {useEffect, useRef, useState} from "react";
import axios from 'axios';
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";

export const MonsterConnect = () => {
  const [monstersData, setMonsterData] = useState({});
  const loading = useRef(true);

  useEffect(() => {
    const getMonsters = async () => {
      try {
        const dataRef = await axios.get('http://localhost:8082/api/monsters');
        console.log("DataRef: ", dataRef);
        setMonsterData(dataRef.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(monstersData);
    if (Object.keys(monstersData).length > 0 ) {
      loading.current = false;
      console.log("Done Loading");
    } else {
      getMonsters();
      console.log("Loading...");
    }
    console.log(monstersData)
  }, [monstersData])

  if (loading.current) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">

      {Object.keys(monstersData).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          <div className="col-sm-3">
            <div className="Monster-list card">
              <div className="card-body">
                <h2 className="List-title card-title">Monsters</h2>
                <div className="List">
                  <ul>
                    {Monsterlist}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
};
