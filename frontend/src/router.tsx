import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginView from "./view/LoginView"
import RegisterView from "./view/RegisterView"
import AuthLayout from "./layouts/AuthLayout"

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={AuthLayout()}>
                    <Route path="/auth/login" element={<LoginView/>} />
                    <Route path="/auth/register" element={<RegisterView/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}