import React from 'react'
import india from "../../img/india.jpg";
import Reklama from '../Reklama/Reklama';

function India() {
    return (
        <div className="container-f">
            <h1>India</h1>

            <div className="row">
                <div className="col-md-8">
                    <div className="img-big">
                        <img src={india} alt="India-img" className='img-fluid ' />
                        <div className="img-big-text ">
                            <p>India signals it could soften its zero-Covid policy, but there are more questions than answers</p>
                        </div>
                    </div>

                    <div className="p-border-top">
                        <p>
                            Spain boosts security as prime minister targeted amid series of letter bombs
                        </p>
                        <p>
                            India on track for record $100 billion in remittances, says India Bank
                        </p>
                        <p>
                            What's happening in India after zero-Covid protests?
                        </p>
                    </div>

                </div>
                <div className="col-md-4">
                  <Reklama/>
                </div>
            </div>
        </div>
    )
}

export default India
