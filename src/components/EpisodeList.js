import React, { useEffect, useState } from "react";
import axios from "axios";
import EpiCard from "./EpisodeCard";

export default function CharacterList() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/`).then(res => {
      // console.log("data: ", res.data.results);
      setData(res.data.results);
    });
  }, []);

  if (!data) return <h3>Loading...</h3>;

  return (
    <section className="character-list grid-view">
      {data.map(info => {
        return <EpiCard key={info.id} data={info} />;
      })}
    </section>
  );
}