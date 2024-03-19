import React from 'react'
import './page1section2.scss';
import searchIcon from '../../../assets/icons/search.svg';
import flegIcon from '../../../assets/icons/flag.svg';
import whiteFremIcon from '../../../assets/icons/wireframe.svg';

export default function Page1Section2() {
    return (
        <div className='P1s2bg'>
            <div className="P1s2">
                <div className="p1s2-box">
                    <div className="p1s1-box-text">
                        <p>Zoek op kaart</p>
                    </div>
                    <div className="p1s1-box-icon">
                        <img src={searchIcon} alt="icon" />
                    </div>
                </div>
                <div className="p1s2-box">
                    <div className="p1s1-box-text">
                        <p>Verken de regio</p>
                    </div>
                    <div className="p1s1-box-icon">
                        <img src={flegIcon} alt="icon" />
                    </div>
                </div>
                <div className="p1s2-box">
                    <div className="p1s1-box-text">
                        <p>Zoekprofiel aanmaken</p>
                    </div>
                    <div className="p1s1-box-icon">
                        <img src={whiteFremIcon} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
