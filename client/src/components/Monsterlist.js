import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {MonsterContext} from "./MonsterContext";
import {getMonsterData} from "./MonsterConnect";

export const Monsterlist = (props) => {
  const [monstersData, setMonstersData] = useState([]);
  const [monsterIcons, setMonsterIcons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMonsters = async () => {
      try {
        const dataRef = await axios.get('http://localhost:8082/api/monsters');
        console.log("DataRef: ", dataRef);
        setMonstersData(dataRef.data);
        const iconRef = await axios.get('http://localhost:8082/api/monsters/icons');
        console.log("IconRef: ", iconRef);
        setMonsterIcons(iconRef.data);
      } catch (err) {
        console.log(err);
      }
    //   setMonsterData(['Ancient Leshen', 'Barroth', 'Bazelgeuse', 'Jyuratodus', 'Zorah Magdaros'])
    //   setMonsterIcons(['https://static.wikia.nocookie.net/monsterhunter/images/7/71/MHW-Ancient_Leshen_Icon.png',
    //     'https://static.wikia.nocookie.net/monsterhunter/images/0/0a/MHW-Barroth_Icon.png',
    //     'https://static.wikia.nocookie.net/monsterhunter/images/5/57/MHW-Bazelgeuse_Icon.png',
    //     'https://static.wikia.nocookie.net/monsterhunter/images/d/da/MHW-Jyuratodus_Icon.png',
    //     'https://static.wikia.nocookie.net/monsterhunter/images/1/16/MHW-Zorah_Magdaros_Icon.png'])
    };
    console.log(monstersData);
    if (Object.keys(monstersData).length > 0 && Object.keys(monsterIcons).length > 0) {
      setLoading(false);
      console.log("Done Loading");
    } else {
      getMonsters();
      console.log("Loading...");
    }
  }, [monstersData, monsterIcons]);

  // TODO: uncomment later
  if (loading) {
    console.log("Loading...")
    return <div>Loading...</div>
  }

  const renderMonstersCards = monstersData.map((monster, index) => (
    <MonsterCard monster={monster} icon={monsterIcons[index]} />
  ));

  return (
    <div className="flex flex-col h-[50vh] overflow-x-hidden bg-amber-300 rounded-xl mt-12 shadow-black border-amber-950
    border-2 p-2">
      <h2 className="pl-2 font-bold text-2xl">Monsters</h2>
      <ul className="p-2 flex flex-col max-w-screen-xl">
        {renderMonstersCards}
      </ul>
    </div>
  );
}

const MonsterCard = (props) =>{
  const {setCurrentMonster} = useContext(MonsterContext);
  const [change, setChange] = useState('');

  useEffect(() => {
    if (change !== '') {
      console.log("Change: ", change)
      getMonsterData(setCurrentMonster, change);
    }
  }, [change])

  let icon = props.icon;
  if (props.icon) {
    icon = props.icon.split('revision')[0];
  } else {
    icon = "https://static.wikia.nocookie.net/monsterhunter/images/6/67/MHRise_Item_Icon-Question_Mark_Red.svg/"
  }
  return (
    <li className={'my-1'} key={props.monster}>
      <button className={'flex items-center'} onClick={() => setChange(props.monster)}>
        <img className={'flex-none w-14 border-2 border-black p-2.5'} src={icon} alt={props.monster} loading={'lazy'} />
        <h1 className='flex-none w-44 min-w-30 text-xl font-bold text-center content-center'>{props.monster}</h1>
      </button>
    </li>
  )
}
