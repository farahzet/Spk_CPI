
import React from 'react';
import { RiwayatPage } from '../RiwayatPage/RiwayatPage';



export const Dashboard = () => {
    return(
        <div className="d-flex flex-column gap-4 mx-4">
            <h2>Hallo ! Sudah Makan hari ini ?</h2>
            <RiwayatPage maxHeight={'45rem'} forPage={'homepage'} />
        </div>
    )
}