import React from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'
import Head from "next/head"

export const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
