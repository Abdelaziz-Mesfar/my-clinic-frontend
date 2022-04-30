import React, { useState } from 'react'

import Sidebar from '../components/side bar/Sidebar';
import Sidebar2 from '../components/side bar/Sidebar2';

function InsideLayout(props) {
    return (
        <div style={{ display: "flex" }}>
            {/* <div style={{ background: 'lightgreen', padding: 15, height: '100vh' }}>
                <p>InsideLayout</p>
            </div> */}
            <Sidebar2 />
            {/* <Sidebar /> */}
            <div className='child'>
                {props.children}
            </div>
        </div>
    )
}

export default InsideLayout