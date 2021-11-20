import CircularProgress from "@material-ui/core/CircularProgress"
import { Layout } from "components/Layout";
import { Header } from "components/Header";
import type { NextPage } from "next";
import { CreateTeam } from "components/CreateTeam";
import { ChoosePokemon } from "components/ChoosePokemon";

import { useEffect, useState } from "react";
import { api } from "services/api";


const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("pokemons");
        setPokemons(data);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  return (
    <Layout title="Create Team | PokeTeam">
      <Header href="/teams" title="Team" />
      <CreateTeam />
      {pokemons.length === 0 ? <CircularProgress color="inherit" /> :
        <ChoosePokemon pokemons={pokemons} />}
    </Layout>
  );
};

export default Home;
