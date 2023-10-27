import { useState } from "react";
import { deleteShip, getExpandedShipsHaulers } from "../services/shipService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AllShips = () => {
  const [allShips, setAllShips] = useState([]);
//   const [rerender, setRerender] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    getExpandedShipsHaulers().then((shipArray) => {
      setAllShips(shipArray);
    });
  }, []);

  const handleDelete = (ship) => {
    deleteShip(ship).then(() => {
        // setRerender(!rerender)
        navigate(`/ships`);
    });
  };

  return (
    <div>
      <ul className="ships flex flex-wrap">
        {allShips.map((ship) => {
          return (
            <li
              key={ship.id}
              value={ship.id}
              className="ship_hauler m-2 border-green-400 border-2 w-fit p-2"
            >
              <div>Ship Name: {ship.name}</div>{" "}
              <div>Hauler Name: {ship.hauler?.name} </div>
              <button onClick={() => {handleDelete(ship)}} className="btn-delete border-2 border-red-400 p-1 hover:bg-red-600">
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
