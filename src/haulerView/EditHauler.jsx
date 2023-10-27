import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editHauler, getHaulerById } from "../services/haulerService";
import { getAllDocks } from "../services/dockService";

export const EditHauler = () => {
  const navigate = useNavigate();
  const { haulerId } = useParams();
  const [hauler, setHauler] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getHaulerById(haulerId).then((haulerArray) => {
      setHauler(haulerArray);
      console.log(haulerArray);
    });

    getAllDocks().then((dockArray) => {
      setDocks(dockArray);
    });
  }, [haulerId]);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: haulerId,
      name: hauler.name,
      dock_id: hauler.dock_id
    };
    editHauler(updatedHauler).then(() => {
      navigate("/haulers");
    });
  };

  return (
    <form className="form justify-center mt-10 w-fit">
      <div>
        <div className="box border-2 p-4 text-3xl m-2">
          <label className="label  m-2">Hauler Name:</label>
          <input
            name="name"
            value={hauler?.name ? hauler?.name : ""}
            type="text"
            placeholder="Hauler Name"
            className="input-box bg-slate-300"
            onChange={(event) => {
              const haulerCopy = { ...hauler };
              haulerCopy.name = event.target.value;
              setHauler(haulerCopy);
            }}
          />
        </div>
        <div className="box border-2 p-4 text-3xl m-2">
          <label className="dock-id m-2">Dock ID:</label>
          <select
            required
            name="dock_id"
            className="dock"
            onChange={(event) => {
              const haulerCopy = { ...hauler };
              haulerCopy.dock_id = parseInt(event.target.value);
              setHauler(haulerCopy);
            }}
          >
            <option value="0">{hauler.dock_id}</option>
            {docks.map((dock) => {
              return (
                <option value={dock.id} key={dock.id}>
                  {dock.id}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-5">
          <button className="button m-2 p-4 bg-slate-400" onClick={handleSave}>
            UPDATE
          </button>
        </div>
      </div>
    </form>
  );
};
