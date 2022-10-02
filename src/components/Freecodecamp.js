import React from 'react'
import data from "../data/data.json"
import Temoin from './Temoin';

export default function Freecodecamp() {
  return (
    <div style={{padding: "20"}}>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      {data.map((temoin) => {
        return <Temoin key={temoin.id} temoin={temoin} />;
      })}
    </div>
  );
}
