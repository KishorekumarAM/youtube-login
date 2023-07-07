import { Box } from '@mui/material';
import React from 'react';
import  LibraryImage from '../Assets/L.png';

function Library() {
  return (
    <>
    <Box height={100}/>
    
    <div>
        <img src={LibraryImage}  style={{justifyContent:'center',alignItems:'center',marginTop: '100px',marginLeft: '400px'}} />
        <h1 style={{textAlign: 'center',marginRight:'100px'}}>Enjoy your favorite videos</h1>
        <p style={{textAlign: 'center',marginRight:'100px'}}>Sign in to access videos that you’ve liked or saved</p>
        
        </div>
    
    </>
  )
}

export default Library