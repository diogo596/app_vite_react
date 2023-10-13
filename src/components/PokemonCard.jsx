function PokemonCard (props) {
const {pokemon} = props
    return (
        <>
            <figure>
                <img 
                src={pokemon.imgSrc}
                alt="Bulbazaur"
                />
            
            <figcaption>
                {pokemon.name}
            </figcaption>  
            {pokemon.imgSrc ? <src/> : <p>???</p>}
            </figure>       
            
        </>
    );
}



export default PokemonCard;


