import React from 'react'
import { useSelector } from 'react-redux'

import './globalLoading.css'

function GlobalLoading() {
    const loading = useSelector(state => state.feedback.loading)
    return (
        <div className="global-loading" style={{display: loading ? 'flex' : 'none'}}>
            <div className="loader-wrapper">
                <div className="loader">
                    <div className="loader loader-inner"></div>
                </div>
            </div>
        </div>
    )
}

export default GlobalLoading