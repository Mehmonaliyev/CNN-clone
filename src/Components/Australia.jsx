import React from 'react'
import australia1 from "../img/world1.jpg";

function Australia() {
    return (
        <div className="container-f">
            <h1>Australia</h1>

            <div className="row">
                <div className="col-md-8">
                    <div className="img-big">
                        <img src={australia1} alt="Australia-img" className='img-fluid ' />
                        <div className="img-big-text ">
                            <p>China signals it could soften its zero-Covid policy, but there are more questions than answers</p>
                        </div>
                    </div>

                    <div className="p-border-top">
                        <p>
                            Spain boosts security as prime minister targeted amid series of letter bombs
                        </p>
                        <p>
                            India on track for record $100 billion in remittances, says Australia Bank
                        </p>
                        <p>
                            What's happening in China after zero-Covid protests?
                        </p>
                    </div>

                </div>
                <div className="col-md-4">
                    <img src="https://cdn.cnn.com/cnnnext/dam/assets/220704175328-1-highland-park-shooting-gallery-070422-large-tease.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Australia
