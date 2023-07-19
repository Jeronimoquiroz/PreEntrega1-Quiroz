
import './App.css';
import NavBar from '../src/Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./Componentes/itemDetailContainer/itemDetailContainer"
import Error from './Componentes/Error';


function App() {
  return (

    <div className="App">
      <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path={"*"} element={<Error />} />
        

      </Routes>
      
      </BrowserRouter>
          
    </div>
  );
}

export default App;

// <Route path={"*"} element={<Error />} />