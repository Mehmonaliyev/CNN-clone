import React from 'react';
import '../css/home.css'
import hom1 from "../img/home1.jpg";
import home2 from "../img/home2.jpg";


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
                    <div className="col-md-5 home-h1">
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
                                Federal judge orders top lawyers from Trump White House to testify in criminal grand jury probe
                            </p>
                            <p className='display-6 py-2'>
                                Takeaways from the ruling rebuking Donald Trump and the appointment of a special master
                            </p>
                            <p className='display-6 py-2'>
                                Analysis: Trump's classic delay and divert legal strategy is running out of road

                            </p>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <img src={home2} alt="" />
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
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>


            </div>
        </>
    )
}

export default Home
