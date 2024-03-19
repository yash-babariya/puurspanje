import React from 'react';
import './page1section4.scss';
import commentIcon from '../../../assets/icons/comment.svg';


export default function Page1Section4() {
    return (
        <div className='P1s4bg'>
            <div className="container">
                <div className="P1s4scroll">
                    <div className="P1s4">

                        <div className="P1s4-box">
                            <div className="P1s4-icon">
                                <img src={commentIcon} alt="icon" />
                            </div>
                            <div className="P1s4-text">
                                <p>Al meer dan 15 jaar specialist in vastgoed</p>
                            </div>
                        </div>
                        <div className="P1s4-box">
                            <div className="P1s4-icon">
                                <img src={commentIcon} alt="icon" />
                            </div>
                            <div className="P1s4-text">
                                <p>Toezicht op bouwproces en regelmatige inspecties</p>
                            </div>
                        </div>
                        <div className="P1s4-box">
                            <div className="P1s4-icon">
                                <img src={commentIcon} alt="icon" />
                            </div>
                            <div className="P1s4-text">
                                <p>Nederlandstalige makelaars en specialisten in Spanje</p>
                            </div>
                        </div>
                        <div className="P1s4-box">
                            <div className="P1s4-icon">
                                <img src={commentIcon} alt="icon" />
                            </div>
                            <div className="P1s4-text">
                                <p>Heldere werkwijze, betrouwbare bouwbedrijven</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
