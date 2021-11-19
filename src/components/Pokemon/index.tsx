import * as Styles from "./styles";
import { pokeColors } from "assets/PokeColors";
import { Confirm } from "assets/icons/Icons";
import { useEffect, useState } from "react";
import { useTeam } from "contexts/TeamContext";

type Type = {
  type: { name: string };
};

type Pokemon = {
  id: string;
  name: string;
  types: Type[];
  img: string;
};

export const Pokemon = ({ pokemon }) => {
  const { team, setTeam, isChange } = useTeam();

  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    setChosen(false);
  }, [isChange]);

  const handleSelectPokemon = (poke: Pokemon) => {
    if (!chosen) {
      if (team.length > 5) {
        return;
      }
      setChosen(!chosen);

      const filter = team.filter((filt) => filt.id === poke.id);

      if (filter.length > 0) {
        return;
      }

      const pokemonObject = {
        id: poke.id,
        name: poke.name,
        type: poke?.types?.[0].type.name,
        img: poke.img,
      };

      setTeam([...team, pokemonObject]);
    }

    if (chosen) {
      setChosen(!chosen);

      const foundedPokemon = team.findIndex(
        (itemCard) => itemCard.id === poke.id
      );
      team.splice(foundedPokemon, 1);
      setTeam([...team]);
    }
  };

  return (
    <Styles.Container
      onClick={() => handleSelectPokemon(pokemon)}
      primaryColor={pokeColors[pokemon?.types?.[0]?.type.name]}
      secundaryColor={pokeColors[pokemon?.types?.[1]?.type.name]}
    >
      <div className="id">{`#${pokemon?.id}`}</div>
      <div className="pokemon">
        <img src={pokemon?.img} alt={pokemon?.name} />
        {chosen && <Confirm className="chosen" color="#90D861" />}
      </div>
      <h1>{pokemon?.name}</h1>

      <div className="colors">
        <div className="primaryColor" />
        <div className="secundaryColor" />
      </div>
    </Styles.Container>
  );
};
