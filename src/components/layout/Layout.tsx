import { ThemeProvider } from "@mui/material"
import { ReactNode } from "react"
import { BrowserRouter as Router, Routes } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: any) => {

    return (
        <div id="layout">
            <Router>
                <Header />
                <Routes>
                    {children}
                </Routes>
                <Footer />
            </Router>   
        </div>
    )
}

export default Layout