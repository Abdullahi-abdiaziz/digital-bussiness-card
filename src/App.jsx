import React from 'react'

import About from './components/About'
import Profile from './components/Profile'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className='container'>
            <Profile />
            <About />
            <Footer />
        </div>
    )
}