import React from 'react'

import Sidebar from '../components/side bar/Sidebar';

function InsideLayout(props) {
    return (
        <div style={{ display: "flex" }}>
            {/* <div style={{ background: 'lightgreen', padding: 15, height: '100vh' }}>
                <p>InsideLayout</p>
            </div> */}
            <Sidebar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default InsideLayout