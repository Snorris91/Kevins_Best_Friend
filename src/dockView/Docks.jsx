import { useState } from "react";
import { getEmbedDocks } from "../services/dockService";
import { useEffect } from "react";

export const AllDocks = () => {
  const [allDocks, setAllDocks] = useState([]);

  useEffect(() => {
    getEmbedDocks().then((dockArray) => {
      setAllDocks(dockArray);
      console.log(dockArray);
    });
  }, []);

  return (
    <div className="docks text-center">
      <ul>
        {allDocks.map((dock) => {
          return (
            <li key={dock.id} value={dock.id}>
              {dock.location}- Capacity: {dock.capacity} Tons <br></br> Hauler
              Name:<br></br>
              {dock.haulers?.map((hauler) => (
                <li key={hauler.id} className="hauler_name ">
                  {hauler.name}
                </li>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
