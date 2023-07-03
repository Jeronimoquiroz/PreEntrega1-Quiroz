
import './App.css';
import Componente1 from './Componentes/NavBar/Componente1';
import Tarjetas from './Componentes/NavBar/Props';
import Contador from './Componentes/Contador';
import NavBar from '../src/Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (

    <div className="App">
        <NavBar/>
        <ItemListContainer greating=" Bienvenidos a Pro Security. Lideres en productos de seguridad electrónica"/>
        <Componente1/>
        <Tarjetas name="Jeronimo" description="Me dedico a..."  img="https://cdn.pixabay.com/photo/2012/04/18/18/16/man-37470_1280.png" />
        <Tarjetas name="Roger" description="Me dedico a..."  img="https://cdn.pixabay.com/photo/2012/04/18/18/16/man-37470_1280.png" />
        <Tarjetas name="Rabbit" description="Me dedico a..."  img="https://cdn.pixabay.com/photo/2012/04/18/18/16/man-37470_1280.png" />
        <Contador/>   
    </div>
  );
}

export default App;
