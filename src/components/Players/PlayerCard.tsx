import React from "react";
import type { PlayersType } from "../../types";
import { FaUser, FaStar} from "react-icons/fa";

const PlayerCard = ({ player }: { player: PlayersType }) => {
  return (
    <div className="card bg-base-100 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* Player Image */}
      <figure className="relative bg-gray-100">
        <img
          className="w-full h-52 object-cover"
          src={player.playerImage}
          alt={player.playerName}
        />

        {/* Player Type Badge */}
        <div className="absolute top-3 right-3">
          <span className="badge badge-primary font-semibold px-3 py-3">
            {player.playerType}
          </span>
        </div>
      </figure>

      {/* Card Content */}
      <div className="card-body p-5">

        {/* Player Name */}
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <FaUser className="text-primary" />
          </div>

          <h2 className="card-title text-xl font-bold">
            {player.playerName}
          </h2>
        </div>

        {/* Origin */}
        <p className="text-gray-500 text-sm">
          🌍 {player.origin}
        </p>

        <div className="divider my-1"></div>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-600">
            Rating
          </span>

          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-bold">4.8</span>
          </div>
        </div>

        {/* Player Information */}
        <div className="space-y-3 mt-2">

          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              Bowling
            </span>

            <span className="font-semibold text-sm text-right">
              {player.bowlingStyle}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              Batting
            </span>

            <span className="font-semibold text-sm text-right">
              {player.battingStyle}
            </span>
          </div>

        </div>

        <div className="divider my-2"></div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">

          {/* Price */}
          <div>
            <p className="text-xs text-gray-500">
              Player Price
            </p>

            <h2 className="text-2xl font-bold text-primary">
              ${player.price}
            </h2>
          </div>

          {/* Choose Button */}
          <button className="btn btn-primary rounded-lg">
            Choose Player
          </button>

        </div>

      </div>
    </div>
  );
};

export default PlayerCard;