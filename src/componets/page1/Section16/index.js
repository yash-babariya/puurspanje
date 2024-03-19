import React from 'react';
import './page1section16.scss';
import herobanner3 from '../../../assets/images/herobanner3.jpg';



export default function Page1Section16() {
    return (
        <div className='P1s16'>
            <div className="P1s16_heroBanner">
                <img src={herobanner3} alt="herobanner" />
                <div className="P1s16_blackBg">
                    <div className="P1s16_text">
                        <div className="P1s16_textTop">

                            <h4>Nog geen zoekprofiel aangemaakt?</h4>


                            <p>Krijg automatisch de beste woningen toegestuurd op basis van uw persoonlijke voorkeuren.</p>

                        </div>
                        <div className="P1s16_textBottam">

                            <button>Aanmaken</button>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
