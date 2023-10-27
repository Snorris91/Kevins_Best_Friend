import { useState } from "react";
import { getAllHaulers } from "../services/haulerService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AllHaulers = () => {
  const navigate = useNavigate();
  const [allHaulers, setAllHaulers] = useState([]);

  useEffect(() => {
    getAllHaulers().then((haulerArray) => {
      setAllHaulers(haulerArray);
    });
  }, []);

  return (
    <div className="box flex justify-center mt-6">
    <div className="title-haulers border-blue-700 border-4 w-2/4 p-2 text-center">
      <ul className="haulers flex flex-wrap justify-evenly">
        {allHaulers.map((hauler) => {
          return (
            <li key={hauler.id} value={hauler.id} className="hauler p-2 m-1 border-yellow-300 border-2 " >
              <div>{hauler.name}: {hauler.dock_id}</div>
            <button onClick={() => {navigate(`/haulers/${hauler.id}/edit`)}} className="edit_btn p-1 border-yellow-200 border-2 hover:bg-yellow-300">EDIT</button>
            </li>
          );
        })}
      </ul>
    </div></div>
  );
};
