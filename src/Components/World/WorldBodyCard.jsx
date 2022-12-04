import React from 'react'
import home5 from "../../img/home5.jpg";
function WorldBodyCard() {
    return (
        <div className="col-lg-4 col-md-6  home-h1">
                        <div className='bg-light'>
                            <h5 className='mb-0 p-1'> Europa</h5>
                        </div>
                        <img src={home5} alt="" className='img-fluid w-100' />
                        <div className="p-border-top ">
                            <p className='lh-1 h4 py-3'>
                                <b >
                                Russia's war in Ukraine </b>
                            </p>
                           <div className="home2">
                           <p className='display-6 py-2'>
                                Royal US trip overshadowed but Prince William still gets his message out </p>
                            <p className='display-6 py-2'>
                                Wealthy Russian businessman arrested in London on suspicion of multiple offenses, including money laundering
                            </p>
                            <p className='display-6 py-2'>
                                 Go inside Biden's extravagant and star-studded state dinner

                            </p>
                            <p className='display-5 py-2'>

                                Nick Cannon hospitalized with pneumonia
                            </p>
                           </div>
                        </div>

                    </div>
    )
}

export default WorldBodyCard
