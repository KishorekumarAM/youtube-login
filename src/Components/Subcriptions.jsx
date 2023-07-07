import React from 'react';
import Box from '@mui/material/Box';
import Subcription from '../Assets/k.png';


function Subcriptions() {
  return (
    <>
    <Box height={100} />
    <div>
        <img src={Subcription}  style={{textAlign: 'center',marginTop: '100px',marginLeft: '400px'}} />
        <h1 style={{textAlign: 'center',marginRight:'100px'}}>Don’t miss new videos</h1>
        <p style={{textAlign: 'center',marginRight:'100px'}}>Sign in to see updates from your favorite YouTube channels</p>
        
        </div>
    </>
  );
}

export default Subcriptions;