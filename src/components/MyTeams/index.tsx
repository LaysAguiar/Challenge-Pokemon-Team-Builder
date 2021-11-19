import { PokeBall } from "assets/icons/Icons";
import * as Styles from "./styles";
import { pokeColors } from "assets/PokeColors";

export const MyTeams = ({ team }) => {
  return (
    <Styles.Container>
      <h1>{team.name}</h1>

      <Styles.Content>
        {team.pokemons.map((item) => (
          <div className="pokeball" key={item.id}>
            <PokeBall className="svg" color={pokeColors[item?.type]} />
            {item?.img && <img src={item?.img} alt={item?.name} />}
          </div>
        ))}

        <Styles.Divider />
      </Styles.Content>
    </Styles.Container>
  );
};
