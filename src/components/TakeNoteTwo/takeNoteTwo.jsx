import React from 'react'
import './takeNoteTwo.css'
import SimplePopper from '../ColorPopper/colorPopper';
import { BsFillPinFill } from "react-icons/bs";
import { BiBellPlus } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import { IoMdColorPalette } from "react-icons/io";
import { ImImage } from "react-icons/im";
import { RiInboxArchiveLine } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { addNote } from '../../Services/dataService'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

  sectionElements: {
    width: '45vw',
    boxShadow: '2px 2px 2px 1px#b8b3b3',
    borderRadius: '5px 5px',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 8px 5px 8px',
    margin: 'auto',
    marginTop: '30px'
  },

  title: {
    height: '100%',
    width: '100%'
  },

  titleContainer: {
    width: '40vw',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    justifyContent: 'space-between',
    marginTop: '0.5rem'
  },

  takeANoteContainer: {
    width: '40vw',
    height: '100%',
    padding: '5px',
    marginTop: '0.5rem'
  },

  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },

  icons: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  iconsItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    margin: '0.5rem',
    cursor: 'pointer'
  }

})

function TakeNoteTwo(props) {

  const classes = useStyles()

  const [noteObj, setNoteObj] = useState({ title: '', description: '', color: '', isArchived: false })

  const takeTitle = (event) => {
    setNoteObj({ ...noteObj, title: event.target.value })
  }

  const takeDescription = (event) => {
    setNoteObj({ ...noteObj, description: event.target.value })
  }

  const submit = () => {
    addNote(noteObj)
      .then((resp) => { console.log(resp); props.listenToTakeNoteTwo() })
      .catch((error) => { console.log(error) })
  }

  const listenToColorPopper = (color) => {
    setNoteObj({ ...noteObj, color: color })

  }

  const archiveNotes = () => {
    setNoteObj({ ...noteObj, isArchived: true })
  }

  return (
    <div>
      {/* <div class="section-elements" style={{backgroundColor: noteObj.color}}>
        <div class="title">
          <input type="text" onChange={takeTitle} class="title-field" placeholder="Title" style={{backgroundColor: noteObj.color}} />
          <div className="bsFillPinFill-item">
            <BsFillPinFill className='bsFillPinFill' style={{ cursor: 'pointer'}}/>
          </div>
        </div>
        <div class="take-a-note">
          <input type="text" onChange={takeDescription} class="take-a-note-field" placeholder="Take a note" style={{backgroundColor: noteObj.color}}/>
        </div>
        <div class="icons-text">
          <div class="icons">
            <div class="remind-me">
              <BiBellPlus class="remind-me-icon" />
            </div>
            <div class="collaborator">
              <TiUserAdd class="collaborator-icon" />
            </div>
            <div class="background">
              <SimplePopper className="background-item" action='create' listenToColorPopper={listenToColorPopper}/>
            </div>
            <div class="add-image">
              <ImImage class="add-image-icon" />
            </div>
            <div class="archives">
              <RiInboxArchiveLine onClick={archiveNotes} class="archives-icon" />
            </div>
            <div class="more">
              <FiMoreVertical class="more-icon" />
            </div>
            <div class="undo">
              <GrUndo class="undo-icon" />
            </div>
            <div class="redo">
              <GrRedo class="redo-icon" />
            </div>
          </div>
          <div class="close">
            <h6 onClick={submit} class="close-text">Close</h6>
          </div>
        </div>

      </div> */}

      <Box className={classes.sectionElements} sx={{ backgroundColor: noteObj.color }}>

        <Box className={classes.title} >
          <Box className={classes.titleContainer}>

            <Box>
              <InputBase
                onChange={takeTitle}
                placeholder="Title"
                style={{ backgroundColor: noteObj.color }}
              />
            </Box>

            <Box>
              <BsFillPinFill style={{ cursor: 'pointer' }} />
            </Box>
          </Box>
        </Box>

        <Box className={classes.takeANoteContainer}>
          <InputBase
            onChange={takeDescription}
            placeholder="Take a Note..."
            style={{ backgroundColor: noteObj.color }}
          />
        </Box>

        <Box className={classes.iconsContainer}>

          <Box className={classes.icons}>
            <Box className={classes.iconsItems}>
              <BiBellPlus />
              <TiUserAdd />
              <SimplePopper listenToColorPopper={listenToColorPopper} action="create" />
              <ImImage />
              <RiInboxArchiveLine onClick={archiveNotes} />
              <FiMoreVertical />
              <GrUndo />
              <GrRedo />
            </Box>
          </Box>

          <Box>
            <Box className='close-item'>
              <h5 onClick={submit}>Close</h5>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default TakeNoteTwo