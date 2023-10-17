import React, {useContext} from "react";
import logo from "../logo.svg";
import fire from "../elements/fire.png";
import ice from "../elements/ice.png";
import poison from "../elements/poison.png";
import thunder from "../elements/thunder.png";
import water from "../elements/water.png";
import earth from "../elements/earth.png";
import stun from "../elements/stun.png";
import paralysis from "../elements/paralysis.png";
import sleep from "../elements/sleep.png";
import dragon from "../elements/dragon.png";
import explosive from "../elements/explosive.png";
import {MonsterContext} from "./MonsterContext";

export const MonsterInfo = () => {
  const {currentMonster} = useContext(MonsterContext)
  if (currentMonster.name === 'None') {
    return (
      <div className="flex p-16 bg-amber-300 rounded-xl mt-12 shadow-black border-amber-950 border-2 h-[70vh]">
        <div className="flex flex-col w-full">
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
              <h2 className="pl-2 font-bold text-2xl">No Monster Selected</h2>
            </div>
          </div>
          <div className="flex flex-row">
            <img src={logo} />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex p-16 bg-amber-300 rounded-xl mt-12 shadow-black border-amber-950 border-2 h-[70vh]">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="pl-2 font-bold text-2xl">{currentMonster.name}</h2>
          </div>
        </div>
        <div className="flex flex-row my-6 justify-between">
          <div className='flex-col w-1/2 h-60 bg-amber-50 border-amber-950 rounded-md p-2'>
            <img className='w-60 h-60' alt={currentMonster.name + ' Image'} src={currentMonster.mainPic.split('revision')[0]} />
          </div>
          <div className='flex flex-col w-1/2 mx-2 px-2'>
            <div className="flex flex-row-reverse relative -inset-y-10">
              <img className="w-10" src={currentMonster.icon?.split('revision')[0]} alt={currentMonster.name + ' Icon'} />
            </div>
            <ShowElements elements={currentMonster.elements} />
            <ShowType type={currentMonster.type} />
            <ShowWeaknesses weaknesses={currentMonster.weakness} />
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col justify-between">
            <h2 className='font-bold text-2xl'>Description</h2>
            <p className='text'>{currentMonster.description}</p>
          </div>
        </div>
        <ShowEffective effectiveness={currentMonster.effectiveness} />
      </div>
    </div>
  )
}

const ShowWeaknesses = (props) => {
  if (props.weaknesses === null || props.weaknesses[0] === 'None') {
    return
  }
  return (
    <div className='flex flex-col'>
      <h3 className='flex-row font-bold text-2xl'>Weaknesses: </h3>
      <div className='flex flex-row'>
        {props.weaknesses.map((element) => {
          switch (element) {
            case 'Fire':
              return (<img className={'flex-col w-10'} src={fire} alt={'Fire'}/>)
            case 'Ice':
              return (<img className={'flex-col w-10'} src={ice} alt={'Ice'}/>)
            case 'Poison':
              return (<img className={'flex-col w-10'} src={poison} alt={'Poison'}/>)
            case 'Thunder':
              return (<img className={'flex-col w-10'} src={thunder} alt={'Thunder'}/>)
            case 'Water':
              return (<img className={'flex-col w-10'} src={water} alt={'Water'}/>)
            case 'Earth':
              return (<img className={'flex-col w-10'} src={earth} alt={'Earth'}/>)
            case 'Dragon':
              return (<img className={'flex-col w-10'} src={dragon} alt={'Dragon'}/>)
          }})}
      </div>
    </div>
  )
}

const ShowElements = (props) => {
  if (props.elements === null) {
    return
  }
  return (
    <div>
      <h2 className='font-bold text-2xl'>Elements: </h2>
      <div className='flex flex-row'>
        {props.elements.map((element) => {
          switch (element) {
            case ' Fire':
              return (<img className={'flex-col w-10'} src={fire} alt={'Fire'}/>)
            case ' Ice':
              return (<img className={'flex-col w-10'} src={ice} alt={'Ice'}/>)
            case ' poison':
              return (<img className={'flex-col w-10'} src={poison} alt={'Poison'}/>)
            case ' Thunder':
              return (<img className={'flex-col w-10'} src={thunder} alt={'Thunder'}/>)
            case ' Water':
              return (<img className={'flex-col w-10'} src={water} alt={'Water'}/>)
            case ' Earth':
              return (<img className={'flex-col w-10'} src={earth} alt={'Earth'}/>)
          }
        })}
      </div>
    </div>
  );
}

const ShowType = (props) => {
  if (props.type === null) {
    return
  }
  return (
    <div className='flex flex-col'>
      <h3 className='flex-row font-bold text-2xl'>Type: </h3>
      <p className='flex-row'>{props.type}</p>
    </div>
  )
}

const ShowEffective = (props) => {
  if (props.effectiveness === null) {
    return
  }
  return (
    <div className={'flex flex-row'}>
      <table>
        <thead>
          <tr>
            <th className='p-1'><img className='w-44' src={fire} alt={'Fire'}/></th>
            <th className='p-1'><img className='w-44' src={poison} alt={'Poison'}/></th>
            <th className='p-1'><img className='w-44' src={water} alt={'Water'}/></th>
            <th className='p-1'><img className='w-44' src={sleep} alt={'Sleep'}/></th>
            <th className='p-1'><img className='w-44' src={thunder} alt={'Thunder'}/></th>
            <th className='p-1'><img className='w-44' src={paralysis} alt={'Paralysis'}/></th>
            <th className='p-1'><img className='w-44' src={ice} alt={'Ice'}/></th>
            <th className='p-1'><img className='w-44' src={explosive} alt={'Blast'}/></th>
            <th className='p-1'><img className='w-44' src={dragon} alt={'Dragon'}/></th>
            <th className='p-1'><img className='w-44' src={stun} alt={'Stun'}/></th>
          </tr>
        </thead>
        <tr>
          <td className={(props.effectiveness['Fire'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Fire']}</td>
          <td className={(props.effectiveness['Poison'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Poison']}</td>
          <td className={(props.effectiveness['Water'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Water']}</td>
          <td className={(props.effectiveness['Sleep'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Sleep']}</td>
          <td className={(props.effectiveness['Thunder'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Thunder']}</td>
          <td className={(props.effectiveness['Paralysis'][0] === '★') ? 'text-green-50 text-center': 'text00 text-center'}>{props.effectiveness['Paralysis']}</td>
          <td className={(props.effectiveness['Ice'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Ice']}</td>
          <td className={(props.effectiveness['Blast'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Blast']}</td>
          <td className={(props.effectiveness['Dragon'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Dragon']}</td>
          <td className={(props.effectiveness['Stun'][0] === '★') ? 'text-green-50 text-center': 'text-red-600 text-center'}>{props.effectiveness['Stun']}</td>
        </tr>
      </table>
    </div>
  )
}

