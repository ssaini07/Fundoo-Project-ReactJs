import React from 'react'
import './takeNoteOne.css'
// import { GoChecklist } from "react-icons/go";
// import { FaPaintBrush } from "react-icons/fa";
// import { GrImage } from "react-icons/gr";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { makeStyles } from '@mui/material';
import Box from '@mui/material/Box';
import { ClassNames } from '@emotion/react';

// const useStyles = makeStyles({

//   takeNoteOneContainer: {
//     width: '45vw',
//     height: '6vh',
//     display: 'flex',
//     justifyContent: 'space- between',
//     alignItems: 'center',
//     boxShadow: '2px 2px 2px 1px#b8b3b3',
//     borderRadius: '5px 5px',
//     padding: '5px 8px 5px 8px',
//     margin: 'auto',
//     marginTop: '30px'
//   }
// })


function TakeNoteOne(props) {

  // const classes = useStyles()

  const clicked = () => {
    props.listenToTakeNoteOne()
  }

  return (
    <>
      <Box className='takeNoteOne-container' onClick={clicked}>
        <Box className='note-item'>Take a note...</Box>
        <Box className='icons-fields'>
          <Box><CheckBoxOutlinedIcon htmlColor="grey" /></Box>
          <Box><BrushOutlinedIcon htmlColor="grey" /></Box>
          <Box><InsertPhotoOutlinedIcon htmlColor="grey" /></Box>
        </Box>
      </Box>

    </>
  )
}

export default TakeNoteOne