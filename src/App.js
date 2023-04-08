import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
          nombre      = "emma"
          pais        = "suecia"
          imagen      = "1"
          cargo       = "dev"
          empresa     = "spotify"
          testimonio  = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonio
          nombre      = "juan"
          pais        = "col"
          imagen      = "2"
          cargo       = "dev"
          empresa     = "spotify"
          testimonio  = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonio
          nombre      = "ale"
          pais        = "peru"
          imagen      = "3"
          cargo       = "dev"
          empresa     = "amazon"
          testimonio  = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
      </div>
    </div>
  );
}

export default App;
