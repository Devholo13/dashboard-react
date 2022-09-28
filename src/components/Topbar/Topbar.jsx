import React from 'react' 
import "./Topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Longadmin</span>
                </div>
                <div className="topRight">Right</div>
            </div>
        </div>
    )
}