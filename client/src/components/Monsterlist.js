import React from "react";

export const Monsterlist = () => {
  let monsterList;
  monsterList = <Monster monsters={monsters} />;

  return (
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
  );
}

function Monster(props) {

  return monsterList;
}
