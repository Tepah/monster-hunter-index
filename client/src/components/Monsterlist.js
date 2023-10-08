import React from "react";

export const Monsterlist = (props) => {
  const monsterList = props.monstersData ;
  console.log("MonsterList: ", monsterList);
  const renderMonstersCards = monsterList.map((monster) => (
    <MonsterCard monster={monster} />
  ));

  return (
    <div className="Monster-list card">
      <div className="card-body">
        <h2 className="List-title card-title">Monsters</h2>
        <div className="List">
          <ul>
            {renderMonstersCards}
          </ul>
        </div>
      </div>
    </div>
  );
}

const MonsterCard = (props) =>{

  return (
    <li key={props.monster}>
      <h1 className='text-xl font-bold'>{props.monster}</h1>
    </li>
  )
}
