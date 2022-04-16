import React from 'react'

function OutsideLayout(props) {
    console.log(props);
    return (
        <div style={{ display: "flex" }}>
            <div style={{ background: 'lightgreen', padding: 15, height: '100vh' }}>
                <p>OutsideLayout</p>
            </div>
            <div>
                {props.children}
            </div>
        </div>)
}

export default OutsideLayout