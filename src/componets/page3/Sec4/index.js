import React from 'react';
import './page3sec4.scss';
import P3img7 from '../../../assets/images/P3img7.png';
import P3img8 from '../../../assets/images/P3img8.png';
import Page1Section16 from '../../page1/Section16';

export default function Page3Sec4() {
    return (
        <div>
            <div className='P3s4_Bg'>
                <div className="container">
                    <div className="p3s4">
                        <h4>Gerelateerde artikelen</h4>
                        <div className="p3s4_grid">
                            <div className="p3s4_cart12">
                                <img src={P3img7} alt="img" />
                                <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                                <span>15 December 2020</span>
                                <div className="p3s4_border"></div>
                            </div>
                            <div className="p3s4_cart12">
                                <img src={P3img8} alt="img" />
                                <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                                <span>15 December 2020</span>
                                <div className="p3s4_border"></div>
                            </div>
                            <div className="p3s4_cart3">
                                <h3>Kopen in Spanje?</h3>
                                <p>Benieuwd naar wat je kunt kopen in de beste regio van Spanje?</p>
                                <span>Maak een zoekprofiel aan en ontvang kosteloos en vrijblijvend een persoonlijke top 5.</span>
                                <div className="p3s4_border"></div>
                                <div className="p3s4_button">Zoekprofiel</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page1Section16 />
        </div>
    )
}
