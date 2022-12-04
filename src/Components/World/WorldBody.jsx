import React from 'react'
import WorldBodyCard from './WorldBodyCard'

function WorldBody() {
    return (
        <div className="container-f">
            <div className="row">
                <div className='d-flex align-items-center'>
                    <span className='h2 '>Around the world</span>
                    <div className='hr_ch w-75'>
                    </div>
                </div>
                <WorldBodyCard />
                <WorldBodyCard />
                <WorldBodyCard />
                <WorldBodyCard />
                <WorldBodyCard />

                <div className='d-flex mt-3 align-items-center'>
                    <span className='h2 '> Featured sections</span>
                    <div className='hr_ch w-75'>
                    </div>
                </div>
                <WorldBodyCard/>
              <WorldBodyCard/>
              <WorldBodyCard/>
            </div>
        </div>
    )
}

export default WorldBody
