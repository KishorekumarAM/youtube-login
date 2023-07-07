import { Box } from '@mui/material';
import React from 'react';
import HistoryImage from '../Assets/H.png';

function History() {
  return (
    <>
    <Box height={100}/>
    <div>
        <img src={HistoryImage}  style={{textAlign: 'center',marginTop: '100px',marginLeft: '400px'}} />
        <h1 style={{textAlign: 'center',marginRight:'100px'}}>Keep track of what you watch</h1>
        <p style={{textAlign: 'center',marginRight:'100px'}}>Watch history isn't viewable when signed out. Learn more</p>
        
        </div>
    </>
  )
}

export default History