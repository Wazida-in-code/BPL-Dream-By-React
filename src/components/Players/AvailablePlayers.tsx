import React from "react";
import type { PlayersType } from "../../types";
import { FaUser } from "react-icons/fa";

const AvailablePlayers = ({ players }) => {
  console.log(players);
  return (
    <div className="grid grid-cols-3 gap-6">
      {players.map((player: PlayersType) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img className="w-60 h-70"
                src={player.playerImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body space-y-3">
              <h2 className="card-title"> <FaUser /> {player.playerName}</h2>

            <div className="flex justify-between gap-4">
                <p className="font-semibold">{player.origin}</p>
                <button className="btn">{player.playerType}</button>
            </div>

             <div className="divider"></div>

              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
