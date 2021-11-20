import { PokeBall } from "assets/icons/Icons";
import { pokeColors } from "assets/PokeColors";
import { useTeam } from "contexts/TeamContext";
import { useEffect, useState } from "react";

type PokemonProps = {
  id: string;
  name: string;
  type?: string;
  img: string;
};

type Pokemon = {
  pokemon: PokemonProps;
};

export const PokemonCreateTeam = ({ pokemon }: Pokemon) => {
  const { removeMember, setRemoveMember, isChange } = useTeam();

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setFocus(false);
  }, [isChange]);

  const handleRemoveMember = (poke: PokemonProps) => {
    if (!focus) {
      if (removeMember.length > 5) {
        return;
      }
      setFocus(!focus);

      const filter = removeMember.filter((filt) => filt.id === poke.id);

      if (filter.length > 0) {
        return;
      }

      const pokemonObject = {
        id: poke.id,
        name: poke.name,
        type: poke.type,
        img: poke.img,
      };

      setRemoveMember([...removeMember, pokemonObject]);
    }

    if (focus) {
      setFocus(!focus);

      const foundedPokemon = removeMember.findIndex(
        (remove) => remove.id === poke.id
      );
      removeMember.splice(foundedPokemon, 1);
      setRemoveMember([...removeMember]);
    }
  };

  return (
    <div
      className={`pokeball  ${focus && "off-focus"}`}
      onClick={() => handleRemoveMember(pokemon)}
    >
      <PokeBall className="svg" color={pokeColors[pokemon?.type]} />
      {pokemon?.img && <img src={pokemon?.img} alt={pokemon?.name} />}
    </div>
  );
};
