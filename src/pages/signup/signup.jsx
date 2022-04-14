import React, { useState } from 'react'
import './signup.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import google from '../../google.png';
import googleAccount from '../../googleAccount.png';
import Button from '@mui/material/Button';
import { Signup } from '../../Services/userServices';
import { Box } from '@mui/material';


const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =
    /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignUp() {

    const [signUpObj, setSignUpObj] = useState({ firstName: '', lastName: '', email: '', password: '', service: 'advance' })
    const [objRegex, setRegexObj] = useState({
        firstNameBorder: false, firstNameHelper: '', lastNameBorder: false, lastNameHelper: '',
        userNameBorder: false, userNameHelper: '', passwordBorder: false, passwordHelper: ''
    })

    const submitFunction = () => {

        let firstNameTest = firstNameRegex.test(signUpObj.firstName)
        let lastNameTest = lastNameRegex.test(signUpObj.lastName)
        let userNameTest = emailRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        // let confirmTest = passwordRegex.test(signUpObj.confirm)

        if (firstNameTest === true) {
            setRegexObj(prevState => ({ ...prevState, firstNameBorder: false, firstNameHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, firstNameBorder: true, firstNameHelper: "Please enter correct first name" }))
        }

        if (lastNameTest === true) {
            setRegexObj(prevState => ({ ...prevState, lastNameBorder: false, lastNameHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, lastNameBorder: true, lastNameHelper: "Please enter correct last name" }))
        }

        if (userNameTest === true) {
            setRegexObj(prevState => ({ ...prevState, userNameBorder: false, userNameHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, userNameBorder: true, userNameHelper: "Please choose correct username" }))
        }

        if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "Use 8 or more characters with a mix of letters, numbers, and symbols" }))
        }

        // if (confirmTest === true) {
        //     setRegexObj(prevState => ({ ...prevState, confirmBorder: false, confirmHelper: '' }))
        // } else {
        //     setRegexObj(prevState => ({ ...prevState, confirmBorder: true, confirmHelper: "Use 8 or more characters with a mix of letters, numbers, and symbols" }))
        // }

        if (firstNameTest === true && lastNameTest === true && userNameTest === true && passwordTest === true) {
            Signup(signUpObj)
                .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.id) })
                .catch((error) => { console.log(error) })
        }
    }

    const takeFirstName = (event) => {
        setSignUpObj({ ...signUpObj, firstName: event.target.value })
    }

    const takeLastName = (event) => {
        setSignUpObj({ ...signUpObj, lastName: event.target.value })
    }

    const takeUserName = (event) => {
        setSignUpObj({ ...signUpObj, email: event.target.value })
    }

    const takePassword = (event) => {
        setSignUpObj({ ...signUpObj, password: event.target.value })
    }

    const takeConfirm = (event) => {
        setSignUpObj({ ...signUpObj, confirm: event.target.value })
    }


    return (
        // <div className="main-container">
        //     <div className="signup-page">
        //         <div className="section-content-one">
        //             <div className="section-one">
        //                 <div className="google-image">
        //                     <img src={google} width="80px" alt="google" />
        //                 </div>

        //                 <div className="create-account-text">
        //                     <h3 className="create-account-text-item">Create your Google Account</h3>
        //                 </div>

        //                 <div className="firstName-lastName">
        //                     <div className="firstName">
        //                         <TextField id="outlined-basic" onChange={takeFirstName} error={objRegex.firstNameBorder} helperText={objRegex.firstNameHelper} label="First name" variant="outlined" />
        //                     </div>
        //                     <div className="lastName">
        //                         <TextField id="outlined-basic" onChange={takeLastName} error={objRegex.lastNameBorder} helperText={objRegex.lastNameHelper} label="Last name" variant="outlined" />
        //                     </div>
        //                 </div>

        //                 <div className="username">
        //                     <TextField id="outlined-basic" onChange={takeUserName} error={objRegex.userNameBorder} helperText={objRegex.userNameHelper} label="Username" variant="outlined" className="username-field" />
        //                     <h5>You can use letters, numbers, and periods</h5>
        //                 </div>

        //                 <div className="current-email-address">
        //                     <Link href="#" className="current-email-address-text" style={{ textDecoration: 'none' }}>Use my current email address instead</Link>
        //                 </div>

        //                 <div className="password-confirm">
        //                     <div className="password-text">
        //                         <TextField id="outlined-basic" onChange={takePassword} error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} label="Password" variant="outlined" />
        //                     </div>
        //                     <div className="confirm-text">
        //                         <TextField id="outlined-basic" onChange={takeConfirm} error={objRegex.confirmBorder} helperText={objRegex.confirmHelper} label="Confirm" variant="outlined" />
        //                     </div>
        //                 </div>

        //                 <div className="use-8-or-more-character">
        //                     <h5>Use 8 or more characters with a mix of letters, numbers, and symbols</h5>
        //                 </div>

        //                 <div className="show-password">
        //                     <input type="checkbox" id="show password" name="show password" value="show password" />
        //                     <label for="show password">Show password</label>
        //                 </div>

        //                 <div className="footer-section">
        //                     <div className="sign-in-instead">
        //                         <Link href="#" style={{ textDecoration: 'none' }}>Sign in instead</Link>
        //                     </div>
        //                     <div className="next-button-item">
        //                         <Button variant="contained" onClick={submitFunction}>Next</Button>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="section-two">
        //                 <div className="google-img-container">
        //                     <img src={googleAccount} alt="google" />
        //                 </div>
        //                 <div className="text">
        //                     <h4>One account. All of Google working for you.</h4>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Box className='signup-page'>
            <Box className='section-content-one'>
                <Box className='google-image'>
                    <img src={google} width="80px" alt="google" />
                </Box>
                <div className='createaccount'>Create your Google Account</div>
                <div className='firstName-lastName'>
                    <TextField className='name' onChange={takeFirstName} error={objRegex.firstNameBorder} helperText={objRegex.firstNameHelper} label="First name" variant="outlined" size="small" />

                    <TextField className='name' onChange={takeLastName} error={objRegex.lastNameBorder} helperText={objRegex.lastNameHelper} label="Last name" variant="outlined" size="small" />
                </div>
                <Box className='emailbox'>
                    <TextField fullWidth label="Username" id="fullWidth" size="small" onChange={takeUserName} error={objRegex.userNameBorder} helperText={objRegex.userNameHelper} ></TextField>
                    <div className='emailtxt'><span>You can use letters,numbers & periods</span></div>
                </Box>

                <div class="emailblue"> <Link href="#" className="current-email-address-text" style={{ textDecoration: 'none' }}>Use my current email address instead</Link></div>
                <Box className='box'>
                    <Box className='password-confirm'>
                        <TextField className='name' onChange={takePassword} error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} type="password" label="Password" variant="outlined" size="small" />
                        <TextField className='name' onChange={takePassword} error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} type="password" label="Confirm" variant="outlined" size="small" />
                    </Box>
                    <Box>
                        <h5 className='use-8-or-more-character'>Use 8 or more characters with a mix of letters, numbers, and symbols</h5>
                    </Box>
                </Box>

                <Box className="show-password">
                    <input type="checkbox" id="show password" name="show password" value="show password" />
                    <label for="show password">Show password</label>
                </Box>

                <Box class="footer-section">
                    <Button>Sign in instead</Button>
                    <Button variant="contained" size='small' onClick={submitFunction}>Next</Button>
                </Box>

            </Box>
            <Box className='section-two'>
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt='' />
                <div className='imgtxt'>One account. All of Google working for you</div>
            </Box>
        </Box>
    )
}

export default SignUp