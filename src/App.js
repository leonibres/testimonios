
import './App.css';
import Testimonio  from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros socios sobre nosotros:</h1>
        <Testimonio
          nombre=''
          pais=''
          imagen=''
          cargo=''
          empresa=''
          testimonio=''/>
      </div>
    </div>
  );
}

export default App;
