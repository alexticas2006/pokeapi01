import { useState } from "react";
import "./App.css";

import { TopBar } from "./components/TopBar";
//import { PokeList } from "./components/PokeList";
//import { BottomBar } from "./components/BottomBar";

// Creamos nuestra función "App"
function App() {
  // Devolvemos el contenido JSX que será renderizado en la página
  return (
    <div>
      {/* Renderizamos el componente TopBar */}
      <TopBar />
      {/*<PokeList />*/}
      {/*<BottomBar />*/}
    </div>
  );
}

// Exportamos el componente "App" para que pueda ser utilizado en otros archivos
export default App;