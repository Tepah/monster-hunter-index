import React, {useEffect, useRef, useState} from "react";
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";

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
