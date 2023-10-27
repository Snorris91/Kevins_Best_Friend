export const getAllShips = () => {
  return fetch("http://localhost:8000/ships").then((res) => res.json());
};

export const getExpandedShipsHaulers = () => {
  return fetch("http://localhost:8000/ships?_expand=hauler").then((res) =>
    res.json()
  );
};

export const deleteShip = (ship) => {
  return fetch(`http://localhost:8000/ships/${ship.id}`, {
    method: "DELETE",
  });
};
