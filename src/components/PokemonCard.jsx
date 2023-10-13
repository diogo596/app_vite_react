import PropTypes from "prop-types";

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
            {pokemon.imgSrc ? <img /> : <p>???</p>}
            </figure>       
            
        </>
    );
}

PokemonCard.propTypes={
    pokemon : PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })
}


export default PokemonCard;


