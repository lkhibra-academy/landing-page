import React from 'react'
import Header from '../partials/components/Header'
import Footer from '../partials/components/Footer'
import { useLocation } from 'react-router-dom'

export default function ThankYou() {
    const loc=useLocation();
    const price=loc.state?.price ?? 0;
    return (

        <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />
        {/*  Page content */}
        <main className="flex-grow">

        
        </main>
        {/*  Site footer */}
        <Footer />

</div>
    )
}
