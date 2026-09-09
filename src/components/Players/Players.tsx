import React, { use } from 'react';
import type { PlayersType } from '../../types';
import AvailablePlayers from './AvailablePlayers';

interface PlayersProps {
    playersPromise: Promise<PlayersType[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise)
    console.log(players);
    return (
        <div className='w-11/12 mx-auto'>

            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>Available Players</h2>

                <div>
                    <button className="btn btn-active btn-success">Available</button>
                    <button className="btn btn-active btn-warning">Selected</button>
                </div>
            </div>
            
            <AvailablePlayers players={players} />
        
        </div>
    )
};

export default Players;