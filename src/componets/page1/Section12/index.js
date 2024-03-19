import React from 'react'
import './page1section12.scss'
import cartimg7 from '../../../assets/images/cartimg7.svg'
import cartimg8 from '../../../assets/images/cartimg8.svg'
import cartimg9 from '../../../assets/images/cartimg9.svg'



export default function Page1Section12() {
    return (
        <div className='P1s12bg'>
            <div className="P1s12Left">
                <div className="img1">

                    <img src={cartimg7} alt="img" />

                </div>
                <div className="img2">

                    <img src={cartimg8} alt="img" />

                </div>
                <div className="img3">

                    <img src={cartimg9} alt="img" />

                </div>
            </div>
            <div className="P1s12Right">
                <div className="P1s12RTop">

                    <h4>Anja & Kris</h4>


                    <p>Dankzij Puurspanje zijn we er in de coronapandemie in geslaagd om een eigen droomhuis te kopen in Spanje. Ook na de koop hebben we nog veel aan Puurspanje. Ze zijn voor ons een fijn Nederlandstalig aanspreekpunt voor alle vragen over de omgeving, Spanje of de koop van het huis.</p>


                    <h5>Kochten een villa in Alicante in 2019</h5>

                </div >

                <h6>Lees over deze koop</h6>

            </div >
        </div >
    )
}
