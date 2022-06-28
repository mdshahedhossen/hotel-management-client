// import './App.css';
import Header from './Pages/Shared/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import ReqireAuth from './Pages/RequireAuth';
import Reservations from './Pages/Dashboard/Reservations';
import Reserve from './Pages/Dashboard/Reserve';
import AllUser from './Pages/Dashboard/AllUser';
import ManageReservation from './Pages/Dashboard/ManageReservation';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={
          <ReqireAuth>
            <Dashboard></Dashboard>
          </ReqireAuth>
        }>
          <Route index element={<Reservations></Reservations>}></Route>
          <Route path='/dashboard/users' element={<AllUser></AllUser>}></Route>
          <Route path='/dashboard/manage' element={<ManageReservation></ManageReservation>}></Route>
        </Route>
        <Route path='/reserve/:id' element={<Reserve></Reserve>}></Route>
      </Routes>
    </div>
  );
}

export default App;
