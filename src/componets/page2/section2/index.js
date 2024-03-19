import React from 'react';
import './page2section2.scss';
import P2s2cartimg1 from '../../../assets/images/Page2cartimg1.png';
import P2s2cartimg2 from '../../../assets/images/Page2cartimg2.png';
import P2s2cartimg3 from '../../../assets/images/Page2cartimg3.png';
import P2s2cartimg4 from '../../../assets/images/Page2cartimg4.png';
import P2s2cartimg5 from '../../../assets/images/Page2cartimg5.png';
import P2s2cartimg6 from '../../../assets/images/Page2cartimg6.png';
import P2rightArrow from '../../../assets/icons/P2rightArrow.svg';

export default function Page2Section2() {
    return (
        <div className='P2s2_Bg'>
            <div className="container">
                <div className="p2s2_main">
                    <div className="p2s2_Top">
                        <h2>Activiteiten & bezienswaardigheden</h2>
                    </div>
                    <div className="p2s2_Bottam">
                        <div className="p2s2_cart">
                            <div className="P2s2_cartimg">
                                <img src={P2s2cartimg1} alt="img" />
                            </div>
                            <div className="P2s2_cartText">
                                <div className="p2s2_Text_T">
                                    <h4>Golfbanen</h4>
                                    <p>Binnen een straal van 50 kilometer ontstond in de afgelopen jaren een golfparadijs met ruim twintig ...</p>
                                </div>
                                <div className="p2s2_arrow">
                                    <img src={P2rightArrow} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="p2s2_cart">
                            <div className="P2s2_cartimg">
                                <img src={P2s2cartimg2} alt="img" />
                            </div>
                            <div className="P2s2_cartText">
                                <div className="p2s2_Text_T">
                                    <h4>Natuurparken</h4>
                                    <p>Wat zijn de mooiste plaatsen en natuurgebieden in Murcia? Puurspanje geeft u een overzicht van de belangrijkste...</p>
                                </div>
                                <div className="p2s2_arrow">
                                    <img src={P2rightArrow} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="p2s2_cart">
                            <div className="P2s2_cartimg">
                                <img src={P2s2cartimg3} alt="img" />
                            </div>
                            <div className="P2s2_cartText">
                                <div className="p2s2_Text_T">
                                    <h4>Uitstapjes</h4>
                                    <p>Er zijn verschillen shopping centers in de regio. Deze winkelcentra hebben een groot aanbod aan modeketens en een ruim ...</p>
                                </div>
                                <div className="p2s2_arrow">
                                    <img src={P2rightArrow} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="p2s2_cart">
                            <div className="P2s2_cartimg">
                                <img src={P2s2cartimg4} alt="img" />
                            </div>
                            <div className="P2s2_cartText">
                                <div className="p2s2_Text_T">
                                    <h4>Waterparken</h4>
                                    <p>Pretparken te kust en te keur in de regio! Verken de mooiste pretparken voor jong en </p>
                                </div>
                                <div className="p2s2_arrow">
                                    <img src={P2rightArrow} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="p2s2_cart">
                            <div className="P2s2_cartimg">
                                <img src={P2s2cartimg5} alt="img" />
                            </div>
                            <div className="P2s2_cartText">
                                <div className="p2s2_Text_T">
                                    <h4>Pretparken</h4>
                                    <p>Pretparken te kust en te keur in de regio! Verken de mooiste pretparken voor jong en</p>
                                </div>
                                <div className="p2s2_arrow">
                                    <img src={P2rightArrow} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="p2s2_cart">
                            <div className="P2s2_cartimg">
                                <img src={P2s2cartimg6} alt="img" />
                            </div>
                            <div className="P2s2_cartText">
                                <div className="p2s2_Text_T">
                                    <h4>Uitstapjes</h4>
                                    <p>Er zijn verschillen shopping centers in de regio. Deze winkelcentra hebben een groot aanbod aan modeketens en een ruim ...</p>
                                </div>
                                <div className="p2s2_arrow">
                                    <img src={P2rightArrow} alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
