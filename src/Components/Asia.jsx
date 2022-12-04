import React from 'react'
import asia1 from "../img/asia.jpg";
import Footer from './Footer';
import Reklama from './Reklama/Reklama';
import WorldBody from './World/WorldBody';

function Asia() {
    return (
    <>
        <div className="container-f">
            <h1>Asia</h1>

            <div className="row">
                <div className="col-md-8">
                    <div className="img-big">
                        <img src={asia1} alt="Asia-img" className='img-fluid ' />
                        <div className="img-big-text ">
                            <p>China signals it could soften its zero-Covid policy, but there are more questions than answers</p>
                        </div>
                    </div>

                    <div className="p-border-top">
                        <p>
                            Spain boosts security as prime minister targeted amid series of letter bombs
                        </p>
                        <p>
                            India on track for record $100 billion in remittances, says Asia Bank
                        </p>
                        <p>
                            What's happening in China after zero-Covid protests?
                        </p>
                    </div>

                </div>
                <div className="col-md-4">
                    <Reklama/>
                </div>
            </div>
        </div>
        <WorldBody/>
    <Footer/>
    </>
    )
}

export default Asia
