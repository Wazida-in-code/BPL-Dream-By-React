import React from "react";
import type { PlayersType } from "../../types";
import { FaUser } from "react-icons/fa";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players }) => {
  console.log(players);
  return (
    <div className="grid grid-cols-3 gap-7">
      {players.map((player: PlayersType, index:number) => {
        return <PlayerCard key={index} player= {player}></PlayerCard>;
      })}
    </div>
  );
};

export default AvailablePlayers;
