import * as Styles from "./styles";
import { Pokemon } from "components/Pokemon";


export const ChoosePokemon = ({ pokemons }) => {

  return (
    <Styles.Container>
      <h1>Choose 6 Pokémons:</h1>
      <Styles.Content>
        {pokemons.pokemons &&
          pokemons.pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <Pokemon pokemon={pokemon} />
            </div>
          ))}
      </Styles.Content>
    </Styles.Container>
  );
};
