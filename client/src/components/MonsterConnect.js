import React, {useEffect, useRef, useState} from "react";
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";
import axios from "axios";

export const MonsterConnect = () => {

  return (
    <div className="flex max-w-screen-xl max-h-screen mx-auto">
      <div className="container basis-1/4">
        <Monsterlist />
      </div>
      <div className="container max-h-screen basis-3/4">
        <MonsterInfo />
      </div>
    </div>
  )
};

export const getMonsterData = async (setMonsterData, monsterName) => {
  try {
    const dataRef = await axios.get('http://localhost:8082/api/monsters/name/' + monsterName.replace(' ', '_'));
    console.log("DataRef: ", dataRef);
    setMonsterData(dataRef.data);
  } catch (err) {
    console.log(err);
  }
};
