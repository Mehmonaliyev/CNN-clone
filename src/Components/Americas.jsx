import React from 'react'
import americas1 from "../img/america.jpg";

function Americas() {
    return (
        <div className="container-f">
            <h1>Americas</h1>

            <div className="row">
                <div className="col-md-8">
                    <div className="img-big">
                        <img src={americas1} alt="Americas-img" className='img-fluid ' />
                        <div className="img-big-text ">
                            <p>China signals it could soften its zero-Covid policy, but there are more questions than answers</p>
                        </div>
                    </div>

                    <div className="p-border-top">
                        <p>
                            Spain boosts security as prime minister targeted amid series of letter bombs
                        </p>
                        <p>
                            India on track for record $100 billion in remittances, says Americas Bank
                        </p>
                        <p>
                            What's happening in China after zero-Covid protests?
                        </p>
                    </div>

                </div>
                <div className="col-md-4">
                    <img src="https://tpc.googlesyndication.com/simgad/11396136500387258322" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Americas
