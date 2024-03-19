import React from 'react'
import './page2section6.scss'
import P2s6Img from '../../../assets/images/Page2Sec6img.png';

export default function Page2Section6() {
    return (
        <div className='P2S6_Bg'>
            <div className="container">
                <div className="P2s6">
                    <div className="p2s6_img">
                        <img src={P2s6Img} alt="img" />
                    </div>
                    <div className="P1s12Right">
                        <div className="P1s12RTop">
                            <h4>Anja & Kris</h4>
                            <p>Dankzij Puurspanje zijn we er in de coronapandemie in geslaagd om een eigen droomhuis te kopen in Spanje. Ook na de koop hebben we nog veel aan Puurspanje. Ze zijn voor ons een fijn Nederlandstalig aanspreekpunt voor alle vragen over de omgeving, Spanje of de koop van het huis.</p>
                        </div>
                        <h6>Lees over deze koop</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
