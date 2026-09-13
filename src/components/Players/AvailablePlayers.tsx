import React, { type Dispatch, type SetStateAction } from "react";
import type { PlayersType } from "../../types";
// import { FaUser } from "react-icons/fa";
import PlayerCard from "./PlayerCard";

interface AvailableProps{
  players: PlayersType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>
  selectedPlayers: PlayersType[]
  setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>
}


const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: AvailableProps) => {
  // console.log(players, coin, setCoin);
  return (
    <div className="grid grid-cols-3 gap-7">
      {players.map((player: PlayersType, index:number) => {
        return <PlayerCard key={index} player= {player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></PlayerCard>;
      })}
    </div>
  );
};

export default AvailablePlayers;
