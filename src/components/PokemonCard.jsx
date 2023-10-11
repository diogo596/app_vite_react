function PokemonCard () {
    const pokemon = pokemonList;
    
    return (
        <>
            <figure>
                <img 
                src={pokemon[0].imgSrc}
                alt="Bulbazaur"
                />
            
            <figcaption>
                {pokemon[0].name}
            </figcaption>   
            </figure>

            <figure>
                <img 
                src={pokemon[1].imgSrc}
                alt="Mew"
                />
            
            <figcaption>
                {pokemon[1].name}
            </figcaption>   
            </figure>
            
            {pokemon.imgSrc ? <img/> : <p>???</p>}

        </>
    );
}

export default PokemonCard;

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      
    },
  ];
