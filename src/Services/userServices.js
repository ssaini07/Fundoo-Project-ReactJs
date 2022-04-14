import axios from 'axios'

let a = 2 + 2;

export const login = (loginObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', loginObj)
    return response
}

export const Signup = (SignUpObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', SignUpObj)
    return response
}