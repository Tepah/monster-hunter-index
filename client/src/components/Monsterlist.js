import React, {useEffect, useState} from "react";
import axios from "axios";

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
    <div className="flex flex-col overflow-x-scroll bg-amber-300 rounded-xl mt-12 shadow-black border-amber-950 border-2">
      <h2 className="pl-2 font-bold text-2xl">Monsters</h2>
      <ul className="p-2 flex flex-col">
        {renderMonstersCards}
      </ul>
    </div>
  );
}

const MonsterCard = (props) =>{
  let icon = props.icon;
  if (props.icon) {
    icon = props.icon.split('revision')[0];
  }
  return (
    <li className={''} key={props.monster}>
      <button className={'flex items-center'}>
        <img className={'flex-none w-16'} src={icon} alt={props.monster} loading={'lazy'} />
        <h1 className='flex-none  text-xl font-bold text-center content-center'>{props.monster}</h1>
      </button>
    </li>
  )
}
