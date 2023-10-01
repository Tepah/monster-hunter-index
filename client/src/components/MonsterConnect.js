import React, {useEffect, useRef, useState} from "react";
import axios from 'axios';
import { MonsterInfo } from "./MonsterInfo";
import { Monsterlist } from "./Monsterlist";


// export class MonsterConnect extends React.Component {
//
//     async getData() {
//         const res = await axios('http://localhost:8082/api/monsters');
//         return await res.data[0];
//     }
//
//     constructor (props) {
//         super(props);
//         this.state = {
//             monsters: {},
//         }
//     }
//
//
//     componentDidMount() {
//         this.getMonsters();
//     }
//
//     getMonsters = () => {
//         axios
//           .get('http://localhost:8082/api/monsters')
//           .then(data => this.setState({ monsters: data.data[0]}))
//           .catch(err => {
//               console.log(err);
//               return null;
//           })
//     };
//
//     render() {
//         var monsters_data = this.state.monsters;
//         return (
//             <div className="container">
//
//                 {Object.keys(monsters_data).length === 0 ? (
//                     <div>Loading...</div>
//                 ) : (
//                     <div className="row">
//                         <div className="col-sm-3">
//                         <div className="Monster-list card">
//                             <div className="card-body">
//                                 <h2 className="List-title card-title">Monsters</h2>
//                                 <div className="List">
//                                     <ul>
//                                     {Monsterlist}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                         <div className="col-9">
//                         <MonsterInfo monster={ monsters_data["rathian"] } />
//                         </div>
//                     </div>
//                 )}
//
//             </div>
//         )
//     };
// }

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
          <div className="col-9">
            <MonsterInfo monster={monstersData["rathian"]}/>
          </div>
        </div>
      )}

    </div>
  )
};
