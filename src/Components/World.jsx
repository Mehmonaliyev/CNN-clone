import React from 'react'
import Footer from './Footer';
import WorldBody from './World/WorldBody';
import WorldHead from './World/WorldHead';
import '../css/world.css'

function World() {
    return (
        <>
        <WorldHead/>
        <WorldBody/>
        <Footer/>
        </>
    )
}

export default World
