import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Loader } from "./Loader";
import PokemonCard from "./PokemonCard";

function PokemonList() {

    const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className="card-list-pokemon container">
                        {
                            filteredPokemons.length ? (
                                <>
                                    {filteredPokemons.map((pokemon) => (
                                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                                    ))}
                                </>

                            ) : (
                                <>
                                    {allPokemons.map((pokemon) => (
                                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                                    ))}
                                </>

                            )
                        }

                    </div>
                )
            }
        </>
    )
}

export default PokemonList;