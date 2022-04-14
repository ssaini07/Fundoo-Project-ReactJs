import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signin/signin'
import SignUp from './pages/signup/signup'
import Dashboard from './pages/Dashboard/dashboard'
import { Signup } from './Services/userServices';
import Router from './components/router/Router';
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
    return ( < div >
        <
        Provider store = { store } >

        <
        Router / >
        <
        /Provider> < /
        div >
    );
}

export default App;