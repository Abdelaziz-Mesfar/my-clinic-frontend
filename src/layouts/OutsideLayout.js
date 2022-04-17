import React from 'react'
import Navbar from '../components/navbar/Navbar';

function OutsideLayout(props) {
    console.log(props);
    return (
        <div >
            {/* <div style={{ background: 'lightgreen', padding: 15, height: '100vh' }}>
                <p>OutsideLayout</p>
            </div> */}
            <Navbar />
            <div>
                {props.children}
            </div>
        </div>)
}

export default OutsideLayout