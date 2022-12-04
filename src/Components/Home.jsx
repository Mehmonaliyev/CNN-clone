import React from 'react';
import '../css/home.css'
import hom1 from "../img/home1.jpg";
import home2 from "../img/home2.jpg";
import home3 from "../img/home3.jpg";
import home4 from "../img/home4.jpg";
import home5 from "../img/home5.jpg";
import home6 from "../img/home6.jpg";
import home7 from "../img/home7.png";
import reklama1 from '../img/reklama1.png'
import { FcStart } from "react-icons/fc";
import Footer from './Footer';
import Reklama from './Reklama/Reklama';
import WorldBody from './World/WorldBody';

function Home() {
    return (
        <>
            <div className="container-f">
                <div className="menu-home">
                    <div className="menucha">
                        <p> <b>PODCAST:</b> Tug of war</p>
                        <p>Russia's war in Ukraine</p>
                        <p><b>TRENDING:</b> Spain letter bombs</p>
                        <p>South Africa</p>
                        <p>Australia rape case</p>
                        <p>Most expensive cities</p>
                        <p className='b_none'>"Harry & Meghan" </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12  home-h1">
                        <h2 className='text-center lh-1 h1'>
                            Mar-a-Lago docs review halted in major defeat for Trump
                        </h2>
                        <img src={hom1} alt="" className='img-fluid w-100' />
                        <div className="p-border-top">
                            <p className='lh-1 py-3'>
                                <b >
                                    The ruling removes a major obstacle to the DOJ's investigation into the mishandling of government records from Trump's time in office

                                </b>
                            </p>
                            <p className='display-6 py-2'>
                                <FcStart className='icon-red' />  Federal judge orders top lawyers from Trump White House to testify in criminal grand jury probe
                            </p>
                            <p className='display-6 py-2'>
                                Takeaways from the ruling rebuking Donald Trump and the appointment of a special master
                            </p>
                            <p className='display-6 py-2'>
                                Analysis: Trump's classic delay and divert legal strategy is running out of road

                            </p>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-3">
                        <img src={home2} alt="" className='img-fluid w-100' />
                        <div className="p-border-top ">
                            <p className='lh-1 py-3'>
                                <b >
                                    Chinese police are using cellphone data to track down protesters
                                </b>
                            </p>
                        </div>
                        <div className="p-border-top home2">
                            <p className='display-6 py-2'>
                                • China's cities are running out of cash to pay huge Covid lockdown bills
                            </p>
                            <p className='display-6 py-2'>
                                • Opinion: China protesters' comic ingenuity
                            </p>
                        </div>

                        {/* second-img */}

                        <img src={home3} alt="" className='img-fluid w-100' />
                        <div className="p-border-top ">
                            <p className='lh-1 py-3'>
                                <b >
                                    How China fanned the flames of public fury</b>
                            </p>
                        </div>
                        <div className="p-border-top home2">
                            <p className='display-6 py-2'>
                                • Why Jiang Zemin's death could impact protests in China
                            </p>
                            <p className='display-6 py-2'>
                                • Xi acknowledges public frustration over Covid, EU official says
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ">
                        <img src={home4} alt="" className='img-fluid w-100' />
                        <div className="p-border-top ">
                            <p className='lh-1 py-3'>
                                <b >
                                    Trump calls for the termination of the US Constitution in Truth Social post
                                </b>
                            </p>
                        </div>
                        <div className="p-border-top home2">
                            <p className='display-6 py-2'>
                                Putin will visit parts of Ukraine that he proclaimed as annexed 'in due course,' Kremlin says
                            </p>
                            <p className='display-6 py-2'>
                                'Rogue wave' kills American woman, injures four on Antarctic cruise
                            </p>
                            <p className='display-6 py-2'>
                                6.1-magnitude earthquake strikes Indonesian island of Java
                            </p>
                            <p className='display-6 py-2'>
                                Sydney opens 'most significant' arts venue since Opera Hous
                            </p>
                            <p className='display-6 py-2'>
                                US Navy sends a message to adversaries with rare Indian Ocean submarine port visit
                            </p>
                            <p className='display-6 py-2'>
                                Soccer plvb ayer mourns friend who rights group says was killed for celebrating US win
                            </p>
                            <p className='display-6 py-2'>
                                <FcStart className='icon-red' />    Sydney opens 'most significant' arts venue since Opera Hous
                            </p>

                            <p className='display-6 py-2'>
                                Group suspected of trying to steal Banksy mural in Ukraine arrested
                            </p>
                        </div>
                    </div>


                </div>
                {/* next row */}
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6  home-h1">
                        <div className='bg-light'>
                            <h5 className='mb-0 p-1'>  News & buzz</h5>
                        </div>
                        <img src={home5} alt="" className='img-fluid w-100' />
                        <div className="p-border-top home2">
                            <p className='lh-1 py-3'>
                                <b >
                                    Jonathan the tortoise, world's oldest land animal, celebrates his 190th birthday
                                </b>
                            </p>
                            <p className='display-6 py-2'>
                                Royal US trip overshadowed but Prince William still gets his message out </p>
                            <p className='display-6 py-2'>
                                Wealthy Russian businessman arrested in London on suspicion of multiple offenses, including money laundering
                            </p>
                            <p className='display-6 py-2'>
                                <FcStart className='icon-red' />   Go inside Biden's extravagant and star-studded state dinner

                            </p>
                            <p className='display-5 py-2'>

                                Nick Cannon hospitalized with pneumonia
                            </p>
                            <p className='display-6 py-2'>
                                Astronauts will give space station power boost during Saturday spacewalk

                            </p>
                            <p className='display-6 py-2'>
                                <FcStart className='icon-red' />   Go inside Biden's extravagant and star-studded state dinner
                                Lawmakers brawl, throw chairs after male MP slaps female politicia
                            </p>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className='bg-light'>
                            <h5 className='mb-0 p-1'>  Featured</h5>
                        </div>
                        <img src={home6} alt="" className='img-fluid w-100' />
                        <div className="p-border-top bg-light ">
                            <p className='lh-1 py-3 '>
                                <b >
                                    Chinese police are using cellphone data to track down protesters
                                </b>
                            </p>
                        </div>
                        <div className="p-border-top ">
                            <p className='display-6 py-2'>
                                • China's cities are running out of cash to pay huge Covid lockdown bills
                            </p>
                            <p className='display-6 py-2'>
                                • Opinion: China protesters' comic ingenuity
                            </p>
                        </div>

                        {/* second-img */}
                    </div>
                    <div className="col-md-12 col-lg-3 ">
                        <Reklama />
                    </div>
                </div>
                {/* next row finish */}

                {/* reklama */}

                <div className='text-center'>
                    <img src={reklama1} alt="" className='img-fluid w-100' />
                </div>

                {/* reklama finish */}




            </div>

<WorldBody/>
            <Footer />
        </>
    )
}

export default Home
