import { useState } from "react";
import { getAllDocks } from "../services/dockService";
import { useEffect } from "react";

export const AllDocks = () => {
  const [allDocks, setAllDocks] = useState([]);

  useEffect(() => {
    getAllDocks().then((dockArray) => {
      setAllDocks(dockArray);
    });

    
  }, []);

  return (
    <div>
      <ul>
        {allDocks.map((dock) => {
          return (
            <li key={dock.id} value={dock.id}>
              {dock.location}: {dock.capacity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
