import React from 'react'
import './signin.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import google from '../../google.png';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { login } from '../../Services/userServices'
import { Box } from '@mui/material';

const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {

    const [signInObj, setSignInObj] = useState({ email: '', password: '' })

    const [objRegex, setRegexObj] = useState({ emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: '' })


    const submitFunction = () => {
        let emailTest = emailRegex.test(signInObj.email)
        let passwordTest = passwordRegex.test(signInObj.password)
        if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email" }))
        }

        if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct password" }))
        }

        if (emailTest === true && passwordTest === true) {
            login(signInObj)
                .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.id) })
                .catch((error) => { console.log(error) })
        }
    }

    const takeEmail = (event) => {
        setSignInObj({ ...signInObj, email: event.target.value })
    }

    const takePassword = (event) => {
        setSignInObj({ ...signInObj, password: event.target.value })
    }

    return (

        <Box className="big-container">
            <Box className="container">
                <Box className="signin-section-one">
                    <Box className="google-photo">
                        <img src={google} width="80px" alt="google" />
                    </Box>

                    <Box className="sign-in">
                        <h3 className="sign-in-text">Sign in</h3>
                    </Box>

                    <Box className="use-your-google-account">
                        <h2 className="use-your-google-account-text">Use your Google Account</h2>
                    </Box>
                </Box>

                <Box className="signin-section-two">

                    <Box className='email-field'>
                        <TextField id="outlined-basic" onChange={takeEmail} error={objRegex.emailBorder} helperText={objRegex.emailHelper} label="Email or phone" variant="outlined" className="email-or-phone" />
                        <Box className="forgot-email-text"><Link href="#" style={{ textDecoration: 'none' }}>Forgot email?</Link></Box>
                    </Box>

                    <Box className='password-field'>
                        <TextField id="outlined-basic" onChange={takePassword} error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} label="Password" variant="outlined" className="password" />
                        <Box className="forgot-password-text"><Link href="#" style={{ textDecoration: 'none' }}>Forgot password?</Link></Box>
                    </Box>

                    <Box className="note-your-computer-text">
                       <p> Not your computer? Use Guest mode to sign in privately.</p>
                        <Link href="#" className="learn-more-text" style={{ textDecoration: 'none' }}>Learn more</Link>
                    </Box>

                    <Box className="content-four">
                        <Box className="create-account">
                            <Link href="#" style={{ textDecoration: 'none' }}>Create account</Link>
                        </Box>
                        <Box className="next-button">
                            <Button variant="contained" onClick={submitFunction}>Next</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SignIn