import React from 'react'
import Header from '../../components/Header/header'
import TakeNoteTwo from '../../components/TakeNoteTwo/takeNoteTwo'
import TakeNoteOne from '../../components/TakeNoteOne/takeNoteOne'
import TakeNoteThree from '../../components/TakeNoteThree/takeNoteThree'
import './dashboard.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { getNotes } from '../../Services/dataService'
import MiniDrawer from '../../components/Drawer/drawerDemo'
import { Box, Container, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles'

function Dashboard() {

    // const classes = useStyles()

    const [noteView, setNoteView] = useState(true)

    const [listOfNotes, setListOfNotes] = useState([])

    const [drawerOpen, setDrawerOpen] = useState(false)

    const [currentNoteChoice, setCurrentNoteChoice] = useState('notes')

    const GetNotes = () => {
        getNotes().then((resp) => {
            let filter = []
            if (currentNoteChoice === 'notes') {
                filter = resp.data.data.data.filter(function (note) {
                    if (note.isArchived === false && note.isDeleted === false) {
                        return note
                    }
                })
            } else if (currentNoteChoice === 'archive') {
                filter = resp.data.data.data.filter(function (note) {
                    if (note.isArchived === true && note.isDeleted === false) {
                        return note
                    }
                })
            } else if (currentNoteChoice === 'bin') {
                filter = resp.data.data.data.filter(function (note) {
                    if (note.isArchived === false && note.isDeleted === true) {
                        return note
                    }
                })
            }
            setListOfNotes(filter)
        })
            .catch((error) => { console.log(error) })
    }

    const listenToTakeNoteOne = () => {
        setNoteView(false)
    }

    const listenToTakeNoteTwo = () => {
        setNoteView(true)
    }

    const listenToTakeNoteThree = () => {
        GetNotes()
    }

    const listenToHeader = () => {
        setDrawerOpen(!drawerOpen)
    }

    const listenToSideNavBar = (noteChoice) => {
        setCurrentNoteChoice(noteChoice)
    }

    useEffect(() => {
        GetNotes()
    }, [noteView, currentNoteChoice])


    // const noteList = listOfNotes.map((note, index) => <TakeNoteThree listenToTakeNoteThree={listenToTakeNoteThree} key={index} note={note} />)

    const noteList = listOfNotes.map((note, index) =>
        // xs={2} sm={4} md={4} write in line no 85
        <Grid item >
            <TakeNoteThree listenToTakeNoteThree={listenToTakeNoteThree} key={index} note={note} />
        </Grid>)

    return (
        <div>
            <Header listenToHeader={listenToHeader} />
            <div>
                {
                    noteView ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} /> : <TakeNoteTwo listenToTakeNoteTwo={listenToTakeNoteTwo} />
                }
            </div>

            {/* <div className="note-box">
                {noteList}
            </div> */}


            <Container style={{ position: 'relative', left: '90px', width: '75vw', height: '100vh' }}>
                <Grid container={true} spacing={2} >
                    {noteList}
                </Grid>
            </Container>


            <div className='drawer'>
                <MiniDrawer drawerOpen={drawerOpen} listenToSideNavBar={listenToSideNavBar} />
            </div>
        </div>
    )
}

export default Dashboard