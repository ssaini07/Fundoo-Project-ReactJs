import React, { useState } from 'react'
import './takeNoteThree.css'
import { BsFillPinFill } from "react-icons/bs";
import { BiBellPlus } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import { IoMdColorPalette } from "react-icons/io";
import { ImImage } from "react-icons/im";
import { RiInboxArchiveLine } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
// import { GrUndo } from "react-icons/gr";
// import { GrRedo } from "react-icons/gr";
// import { AiOutlineDelete } from "react-icons/ai";
import { makeStyles } from '@material-ui/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SimplePopper from '../ColorPopper/colorPopper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { updateNotes } from '../../Services/dataService';
import { updateArchive } from '../../Services/dataService';
import { deleteNotes } from '../../Services/dataService';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

import InputBase from '@mui/material/InputBase';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { maxWidth } from '@mui/system';
import { IconButton } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// const useStyles = makeStyles({
//   boxContainer: {
//     boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
//     boxShadow: '2px 2px 2px 1px#b8b3b3',
//     borderRadius: '5px 5px',
//     marginTop: '30px'
//   },


//   icons: {
//     color: '#616161',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',

//   },

//   iconsItem: {
//     cursor: 'pointer'
//   },

//   closeText: {

//     fontSize: '14px',
//     fontWeight: '400',
//     cursor: 'pointer'
//   },

//   titleItem: {
//     width: '300px',
//     border: '1px solid #959696',
//     height: '30px',
//     borderRadius: '5px 0 0 5px',
//     outline: 'none',
//     color: 'black',
//     borderWidth: '0px',
//     border: 'none',
//     outline: 'none',
//   },

//   takeANoteItem: {
//     width: '300px',
//     border: '1px solid #959696',
//     height: '30px',
//     borderRadius: '5px 0 0 5px',
//     outline: 'none',
//     color: 'black',
//     borderWidth: '0px',
//     border: 'none',
//     outline: 'none',
//   },
// })

function TakeNoteThree({ note, listenToTakeNoteThree }) {

  // const classes = useStyles()

  // const styles = useStyles()

  const [editNoteObj, setEditNoteObj] = useState({ title: '', description: '', noteId: note.id })
  const [isDeleted, setIsDeleted] = React.useState(false)

  const [open, setOpen] = React.useState(false);

  const handleOpen = (noteObj) => {
    console.log(noteObj);
    setEditNoteObj({ ...editNoteObj, title: noteObj.title, description: noteObj.description, noteId: noteObj.id })
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const changeTitle = (event) => {
    setEditNoteObj({ ...editNoteObj, title: event.target.value })
  }

  const changeDescription = (event) => {
    setEditNoteObj({ ...editNoteObj, description: event.target.value })
  }

  // console.log(note.id);

  const notesUpdate = () => {
    updateNotes(editNoteObj).then((resp) => { console.log(resp) })
      .catch((error) => { console.log(error) })
  }

  const archiveUpdate = () => {
    let obj = {
      noteIdList: [note.id],
      isArchived: true
    }
    updateArchive(obj).then((resp) => { console.log(resp); listenToTakeNoteThree() })
      .catch((error) => { console.log(error) })
  }

  const notesDelete = () => {
    let obj = {
      noteIdList: [note.id],
      isDeleted: true
    }
    setIsDeleted(true)
    console.log(obj);
    deleteNotes(obj).then((resp) => {
      console.log(resp);
      listenToTakeNoteThree()
    })
      .catch((error) => { console.log(error) })
  }

  const listenToColorUpdate = () => {
    listenToTakeNoteThree()
  }



  return (
    <>
      <div>
        <Card className='boxContainer' sx={{ maxWidth: 300 }} style={{ backgroundColor: note.color }}>
          <CardContent>
            <Typography onClick={() => handleOpen(note)} style={{ backgroundColor: note.color }} variant="h6" gutterBottom component='div'>
              {note.title}
            </Typography>
            <Typography onClick={() => handleOpen(note)} style={{ backgroundColor: note.color }} variant="body2" gutterBottom component='div'>
              {note.description}
            </Typography>
          </CardContent>

          <CardActions className='icons'>
            <BiBellPlus className='iconsItem' />
            <TiUserAdd className='iconsItem' />
            <SimplePopper listenToColorUpdate={listenToColorUpdate} action='update' id={note.id} />
            <ImImage className='iconsItem' />
            <RiInboxArchiveLine className='iconsItem' onClick={archiveUpdate} />
            <DeleteOutlineIcon className='iconsItem' onClick={notesDelete} />
            <FiMoreVertical />
          </CardActions>

        </Card>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
        >
          <Box sx={style} style={{ backgroundColor: note.color }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <input type='text' className='titleItem' defaultValue={note.title} onChange={changeTitle} style={{ backgroundColor: note.color }} />
              <BsFillPinFill style={{ cursor: 'pointer' }} />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input type='text' className='takeANoteItem' defaultValue={note.description} onChange={changeDescription} style={{ backgroundColor: note.color }} />
            </Typography>

            <Box className='modebox-container'>
              <Box>
                <Typography className='model-icons'>
                  <BiBellPlus className='iconsItem' />
                  <TiUserAdd className='iconsItem' />
                  <SimplePopper action='update' id={note.id} />
                  <ImImage className='iconsItem' />
                  <RiInboxArchiveLine className='iconsItem' />
                  <DeleteOutlineIcon className='iconsItem' />
                  <FiMoreVertical />
                </Typography>
              </Box>
              <Box onClick={notesUpdate}>
                <h6 style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '500' }}>Close</h6>
              </Box>
            </Box>
          </Box>

        </Modal>

      </div>
    </>
  )
}

export default TakeNoteThree

