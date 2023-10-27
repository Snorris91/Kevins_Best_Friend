import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  //   const navigate = useNavigate();

  return (
    <ul className="navBar bg-green-200 m-2 flex flex-row justify-evenly rounded-3xl border-black border-2 p-2 font-bold">
      <li className="m-2">
        <Link to="/">Home</Link>
      </li>
      <li className="m-2">
        <Link to="/ships">Ships</Link>
      </li>
      <li className="m-2">
        <Link to="/haulers">Haulers</Link>
      </li>
      <li className="m-2">
        <Link to="/docks">Docks</Link>
      </li>
    </ul>
  );
};
