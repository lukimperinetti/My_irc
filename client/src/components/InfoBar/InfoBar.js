import React from'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';


import './InfoBar.css';

const InfoBar = ( {room} ) => (
    <div className="infoBar">
        <div className="LeftInnerContainer">
            <img className='onLineIcon' src={onlineIcon}/>
            <h3>{room}</h3>
        </div>
        <div className="RigthInnerContainer">
            <a href="/"> <img src={closeIcon}/> </a>
        </div>
    </div>
)

export default InfoBar;