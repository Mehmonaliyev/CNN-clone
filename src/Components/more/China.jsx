import React from 'react'
import china from "../../img/china.jpg";

function China() {
    return (
        <div className="container-f">
            <h1>China</h1>

            <div className="row">
                <div className="col-md-8">
                    <div className="img-big">
                        <img src={china} alt="China-img" className='img-fluid ' />
                        <div className="img-big-text ">
                            <p>China signals it could soften its zero-Covid policy, but there are more questions than answers</p>
                        </div>
                    </div>

                    <div className="p-border-top">
                        <p>
                            Spain boosts security as prime minister targeted amid series of letter bombs
                        </p>
                        <p>
                            India on track for record $100 billion in remittances, says China Bank
                        </p>
                        <p>
                            What's happening in China after zero-Covid protests?
                        </p>
                    </div>

                </div>
                <div className="col-md-4">
                    <img src="https://tpc.googlesyndication.com/simgad/18103840598700317066" alt="" />
                </div>
            </div>
        </div>
    )
}

export default China
