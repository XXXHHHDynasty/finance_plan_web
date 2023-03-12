import App from "../App"
import Login from "../pages/Login/Login.jsx"
// import Signup from "../pages/Signup/Signup.jsx"
import Home from "../pages/MainPage/Home/Home.jsx"
import Calculator from "../pages/MainPage/Calculator/calculator.jsx"
import UserProfile from "../pages/MainPage/User/UserProfile/UserProfile.jsx"
import ProfileSetting from "../pages/MainPage/User/ProfileSetting/ProfileSetting.jsx"
import Empty from "../pages/empty.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            {/* <Route path="/signup" element={<Signup />}></Route> */}
            <Route element={<App />}>
                <Route path="/empty" element={<Empty />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/calculator" element={<Calculator />}></Route>
                <Route path="/userProfile" element={<UserProfile />}></Route>
                <Route path="/profileSetting" element={<ProfileSetting />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter;