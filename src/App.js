import './App.css';
import NavBar from "./App-components/Content/NavBar/NavBar";
import Footer from "./App-components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import DialogsContainer from "./App-components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./App-components/Content/Users/UsersContainer";
// import ProfileContainer from "./App-components/Content/Profile/ProfileContainer";
import HeaderContainer from "./App-components/Header/HeaderContainer";
import Login from "./App-components/Content/Login/Login";
import FriendsContainer from "./App-components/Content/Friends/FriendsContainer";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Media/Preloader/Preloader";
import store from "./Redux/store";


const DialogsContainer = React.lazy(() => import("./App-components/Content/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy( () => import("./App-components/Content/Profile/ProfileContainer"));


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='appContent'>
                        <Routes>
                            <Route path='/profile/*' element={
                                 <React.Suspense fallback={"loading"}>
                                <ProfileContainer/>
                                </React.Suspense>}/>
                            <Route path='/friends/*' element={<FriendsContainer/>}/>
                            <Route path='/dialogs' element={
                                <React.Suspense fallback={'loading'}>
                                <DialogsContainer/>
                                </React.Suspense>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}


const mapStateTopProps = (state) => ({
    initialized: state.appReducer.initialized
})


let AppContainer = connect(mapStateTopProps,{initializeApp})(App)

const SamuraiApp = (props) => {
    return <React.StrictMode>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </React.StrictMode>
}

export default SamuraiApp;