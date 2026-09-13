import React, { type Dispatch, type SetStateAction } from 'react';
import type { PlayersType } from '../../types';

interface SelectedProps {
    selectedPlayers: PlayersType[]
    setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>
}

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}: SelectedProps) => {
    console.log(selectedPlayers);
    return (
        <div>Selected</div>
    );
};

export default SelectedPlayers;