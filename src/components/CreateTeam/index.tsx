import { useState } from "react";
import * as Styles from "./styles";
import { Edit, Trash, Confirm } from "assets/icons/Icons";
import ButtonBase from "@material-ui/core/ButtonBase";
import { PokemonCreateTeam } from "components/pokemon-create-team";
import { useTeam } from "contexts/TeamContext";
import { api } from "services/api";

export const CreateTeam = () => {
  const {
    team,
    removeMember,
    setTeam,
    isChange,
    setIsChange,
  } = useTeam();

  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState("My Team");

  const handleRemoveMember = () => {
    removeMember.map((item) => {
      const foundedPokemon = team.findIndex(
        (itemCard) => itemCard.id === item.id
      );
      team.splice(foundedPokemon, 1);
      setTeam([...team]);
      setIsChange(!isChange);
    });
  };

  const handleCreateTeam = async () => {
    const arrTeam = team.map((item) => {
      return {
        name: item.name,
        type: item.type,
        img: item.img,
      };
    });

    const createTeam = {
      name: value,
      pokemons: arrTeam,
    };



    await api.post("pokeTeam", createTeam);

    setTeam([]);

    setIsChange(!isChange);
  };

  return (
    <Styles.Container>
      {isEdit ? (
        <>
          <div className="input">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <ButtonBase onClick={() => setIsEdit(false)}>ok</ButtonBase>
          </div>
        </>
      ) : (
        <h1>
          {value}
          <ButtonBase onClick={() => setIsEdit(true)}>
            <Edit />
          </ButtonBase>
        </h1>
      )}

      <Styles.Content>
        {team.length > 0 &&
          team.length < 7 &&
          team.map((pokemon) => (
            <PokemonCreateTeam key={pokemon.id} pokemon={pokemon} />
          ))}

        {team.length === 0 && <h1>Select your team</h1>}

        <Styles.ButtonContainer>
          <ButtonBase
            className={`trash`}
            disabled={removeMember.length === 0}
            onClick={() => handleRemoveMember()}
          >
            <Trash />
          </ButtonBase>
          <ButtonBase
            className={`confirm`}
            disabled={team.length === 0}
            onClick={() => handleCreateTeam()}
          >
            <Confirm />
          </ButtonBase>
        </Styles.ButtonContainer>
      </Styles.Content>
    </Styles.Container>
  );
};
