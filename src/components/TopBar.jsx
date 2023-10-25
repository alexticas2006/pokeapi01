// Importamos los estilos CSS para el componente TopBar desde "TopBar.css"
import "./TopBar.css";
// Importamos las imágenes de las pokebolas desde los archivos correspondientes
import pokeball from "../img/pokeball.png";
import pokeballcolor from "../img/pokeballcolor.png";

// Definimos el componente TopBar como una función
export function TopBar() {
    // Devolvemos el contenido JSX que será renderizado en la página
    return (
        <div className="title">
            <div className="title__left">
                {/* Texto "Pokédex" */}
                <p>Pokédex</p>
                {/* Contenedor para las pokebolas de "Caught" y "Seen" */}
                <div className="caught-seen">
                    {/* Contenedor para el número de Pokémon "Caught" */}
                    <div className="caught">
                        {/* Imagen de la pokebola en color */}
                        <img
                            src={pokeballcolor}
                            alt="pokeball"
                            style={{ width: "30px", marginRight: "10px" }}
                        />
                        {/* Número de Pokémon "Caught" */}
                        <p>438</p>
                    </div>
                    {/* Contenedor para el número de Pokémon "Seen" */}
                    <div className="seen">
                        {/* Imagen de la pokebola en blanco y negro */}
                        <img
                            src={pokeball}
                            alt="pokeball"
                            style={{ width: "30px", marginRight: "10px" }}
                        />
                        {/* Número de Pokémon "Seen" */}
                        <p>649</p>
                    </div>
                </div>
            </div>
        </div>
    );
}