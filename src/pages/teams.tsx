import { Layout } from "components/Layout";
import { MyTeams } from "components/MyTeams";
import { Header } from "components/Header";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "services/api";

const Teams: NextPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("pokeTeam");
        setTeams(data.team);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  return (
    <Layout title="Team | PokeTeam">
      <Header href="/" title="Create Team" />
      {teams.map((item) => (
        <MyTeams key={item.id} team={item} />
      ))}
    </Layout>
  );
};

export default Teams;
