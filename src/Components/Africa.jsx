import React from 'react'
import africa1 from "../img/africa1.jpg";
import Reklama from './Reklama/Reklama';
import Footer from "./Footer";
import WorldBody from './World/WorldBody';

function Africa() {
    return (
        <>
            <div className="container-f">
                <h1>Africa</h1>

                <div className="row">
                    <div className="col-md-8">
                        <div className="img-big">
                            <img src={africa1} alt="Africa-img" className='img-fluid ' />
                            <div className="img-big-text ">
                                <p>China signals it could soften its zero-Covid policy, but there are more questions than answers</p>
                            </div>
                        </div>

                        <div className="p-border-top">
                            <p>
                                Spain boosts security as prime minister targeted amid series of letter bombs
                            </p>
                            <p>
                                India on track for record $100 billion in remittances, says Africa Bank
                            </p>
                            <p>
                                What's happening in China after zero-Covid protests?
                            </p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <Reklama />
                    </div>

                </div>
            </div>
            <WorldBody/>
            <Footer />
        </>


    )
}

export default Africa
