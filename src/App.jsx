import './App.css'
import { Outlet, Route, Routes } from "react-router-dom";
import { AllShips } from './shipView/Ships';
import { NavBar } from './navBar/navBar';
import { AllHaulers } from './haulerView/Haulers';
import { AllDocks } from './dockView/Docks';
import { Welcome } from './welcome/Welcome';
import { EditHauler } from './haulerView/EditHauler';

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<><NavBar/> <Outlet/></>}>

        <Route index element={<Welcome />}/>
        <Route path="ships" element={<AllShips />}/>
        <Route path="haulers">
          <Route index element={<AllHaulers />}/>
          <Route path=":haulerId/edit" element={<EditHauler />}/>
        </Route>
        <Route path="docks" element={<AllDocks />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
