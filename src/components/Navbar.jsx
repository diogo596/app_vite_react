function Navbar ({ pokemonIndex, setPokemonIndex,  pokemonlength }) {
    
    function pokeNext () {
        setPokemonIndex (pokemonIndex + 1);
      }
      function pokePrev  ()  {
        setPokemonIndex (pokemonIndex - 1);
      }

    return(
        <div>

{
            pokemonIndex > 0 ? (<button onClick={pokePrev}>Précèdent</button>) : ( "" )
        }
        
        {
            pokemonIndex < pokemonlength ? (<button onClick={pokeNext}>Suivant</button>) : ( "" )
        }

        </div>
    )
}


export default Navbar;