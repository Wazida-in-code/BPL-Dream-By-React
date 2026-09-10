import React, { use, useState } from 'react';
import type { PlayersType } from '../../types';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps {
    playersPromise: Promise<PlayersType[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise)
    const [buttonType, setButtonType] = useState("available")
    console.log(buttonType);

    const handleBtnTypeUpdate = (type: "available" | "selected") => {
        setButtonType(type)
    }

    return (
        <div className='w-11/12 mx-auto'>

            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>

                <div>
                    <button onClick={() => handleBtnTypeUpdate("available")} className={`btn btn-active ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>

                    <button onClick={() => handleBtnTypeUpdate("selected")} className={`btn btn-active ${buttonType === "selected" ? "btn-success" : ""} rounded-r-none`}>Selected</button>
                </div>
            </div>
            
            {buttonType === "available" ? (
                <AvailablePlayers players={players} />
            ) : (
                <SelectedPlayers />
            )}
        
        </div>
    )
};

export default Players;