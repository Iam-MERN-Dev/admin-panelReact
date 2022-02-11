import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import "./Topbar.css"

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWraper">
            <div className="topLeft">
                <span className="logo">Ashishadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="./123.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  );
}

export default Topbar;
