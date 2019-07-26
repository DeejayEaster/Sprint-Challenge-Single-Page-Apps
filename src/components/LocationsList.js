import React, { useEffect, useState } from "react";
import axios from "axios";
import LocCard from "./LocationCard";

export default function CharacterList() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`).then(res => {
      //   console.log("location data: ", res.data.results);
      setData(res.data.results);
    });
  }, []);

  if (!data) return <h3>Loading...</h3>;

  return (
    <section className="character-list grid-view">
      {data.map(info => {
        return <LocCard key={info.id} data={info} />;
      })}
    </section>
  );
}
