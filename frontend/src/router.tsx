import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginView from "./view/LoginView"
import RegisterView from "./view/RegisterView"
import AuthLayout from "./layouts/AuthLayout"
import AppLayout from "./layouts/AppLayout"
import LinkTreeView from "./view/LinkTreeView"
import ProfileView from "./view/ProfileView"

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginView/>} />
                    <Route path="/auth/register" element={<RegisterView />} />
                </Route>
                <Route path='/admin' element={<AppLayout />}>
                    <Route index={true} element={<LinkTreeView />} />
                    <Route path="profile" element={<ProfileView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}