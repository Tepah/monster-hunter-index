import React, {useContext} from "react";
import logo from "../logo.svg";
import {MonsterContext} from "./MonsterContext";

export const MonsterInfo = () => {
  const {currentMonster} = useContext(MonsterContext)
  return (
    <div className="flex bg-amber-300 rounded-xl mt-12 shadow-black border-amber-950 border-2">
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2">
            <h2 className="pl-2 font-bold text-2xl">{currentMonster.name}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
