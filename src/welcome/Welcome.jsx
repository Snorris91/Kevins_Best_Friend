import { useEffect, useState } from "react";
import { getAllDocks } from "../services/dockService";
import { getAllShips } from "../services/shipService";
import { getAllHaulers } from "../services/haulerService";

export const Welcome = () => {
  const [allShips, setAllShips] = useState([]);
  const [allHaulers, setAllHaulers] = useState([]);
  const [allDocks, setAllDocks] = useState([]);

  useEffect(() => {
    getAllDocks().then((dockArray) => {
      setAllDocks(dockArray);
    });

    getAllShips().then((shipArray) => {
      setAllShips(shipArray);
    });

    getAllHaulers().then((haulerArray) => {
      setAllHaulers(haulerArray);
    });
  }, []);

  return (
    <>
    <div className="flex m-2 justify-evenly">
      <div>
        <ul className="welcome m-8 ">
          <div className="title text-3xl">SHIPS:</div>
          {allShips.map((ship) => {
            return (
              <li key={ship.id} value={ship.id} className="ship_item border-sky-500 border-2 m-1 text-center p-1">
                {ship.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="welcome m-8 ">
          <div className="title text-3xl">HAULERS:</div>
          {allHaulers.map((hauler) => {
            return (
              <li key={hauler.id} value={hauler.id} className="ship_item border-sky-500 border-2 m-1 text-center p-1">
                {hauler.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="welcome m-8 ">
          <div className="title text-3xl">DOCKS:</div>
          {allDocks.map((dock) => {
            return (
              <li key={dock.id} value={dock.id} className="ship_item border-sky-500 border-2 m-1 text-center p-1">
                {dock.location}
              </li>
            );
          })}
        </ul>
      </div>
    </div></>
  );
};
