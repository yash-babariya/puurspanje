import React from 'react'
import './footer.scss'
import logoWhite from '../../assets/logo/logoWhite.svg';
import facebookLogo from '../../assets/icons/facebook.svg';
import twitterLogo from '../../assets/icons/twitter.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import footerImg from '../../assets/images/footerImg.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import menuBar from '../../assets/icons/menuBar.svg';



export default function Footer() {
    return (
        <div>
            <div className="P1s17">
                <div className="p1S17Top">
                    <div className="p1s17_Top_l">
                        <img src={logoWhite} alt="logo" />
                    </div>
                    <div className="p1s17_Top_r">

                        <img src={facebookLogo} alt="logo" />


                        <img src={twitterLogo} alt="logo" />


                        <img src={instagramLogo} alt="logo" />

                    </div>
                </div >
                <div className="p1S17_middle">
                    <div className="p1s17_Middle_l">
                        <div className="p1s17_ML_img">

                            <img src={footerImg} alt="footerimg" />

                        </div>
                        <div className="p1s17_ML_text">

                            <h4>info@puurspanje.nl</h4>
                            <h5>+34 618 245 967</h5>

                        </div>
                    </div>
                    <div className="p1s17_Middle_r">

                        <p>Ontvang de laatste informatie</p>


                        <h6>97% van onze abonnees beoordeelt onze nieuwsbrief als nuttig en positief.</h6>

                        <div className="footerEmail">
                            <input type="email" placeholder="Email address" />
                            <div className="rightarrow">
                                <img src={rightArrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div >
                <div className="p1s17_border"></div>
                <div className="p1s17_bottam_none">
                    <div className="p1s17_bottam">
                        <div className="p1s17_footerData">

                            <div className="footerData_T">
                                <h2>Menu</h2>
                            </div>

                            <div className="footerData_B">
                                <p>Meer in de regio</p>
                                <p>Verhuurgarantie</p>
                                <p>Aanbod Huizen Spanje</p>
                                <p>Zoekprofiel</p>
                                <p>Over</p>
                            </div>
                        </div>
                        <div className="p1s17_footerData">

                            <div className="footerData_T">
                                <h2>Ontdek</h2>
                            </div>

                            <div className="footerData_B">
                                <p>Events</p>
                                <p>Referenties</p>
                                <p>Blog</p>
                                <p>Contact</p>
                                <p>Cabo Roig</p>
                                <p>Puurspanje Wielerteam</p>
                            </div>
                        </div>
                        <div className="p1s17_footerData">

                            <div className="footerData_T">
                                <h2>Costa Calida</h2>
                            </div>

                            <div className="footerData_B">
                                <p>San Javier</p>
                                <p>el Carmoli</p>
                                <p>Dolores de Pacheco</p>
                                <p>Cabo de Palos</p>
                                <p>la Manga del Mar Menor</p>
                                <p>la Peraleja Golf</p>
                                <p>la Serena Golf</p>
                                <p>lo Pagan</p>
                                <p>lo Romero Golf</p>
                                <p>los Belones</p>
                                <p>los Urrutias</p>
                                <p>Mar Menor Golf</p>
                                <p>Playa Honda</p>
                                <p>Roda Golf</p>
                            </div>
                        </div >
                        <div className="p1s17_footerData">
                            <div className="footerData_T">
                                <h2>‎</h2>
                            </div>
                            <div className="footerData_B">
                                <p>San Pedro del Pinatar</p>
                                <p>Santiago de la Ribera</p>
                                <p>Sucina</p>
                                <p>Cartagena</p>
                                <p>San Juan de los Terreros</p>
                                <p>Aguilas</p>
                                <p>Altaona Village</p>
                                <p>Mircia</p>
                                <p>Mazarron</p>
                                <p>los Alcazares</p>
                                <p>Hacienda del Alamo</p>
                            </div>
                        </div>
                        <div className="p1s17_footerData">

                            <div className="footerData_T">
                                <h2>Costa Blanca Zuid</h2>
                            </div>

                            <div className="footerData_B">
                                <p>Torre de la Horadada</p>
                                <p>Vistabella</p>
                                <p>Cabo Roig</p>
                                <p>Villamartin</p>
                                <p>Campoamor</p>
                                <p>la Finca Golf</p>
                                <p>la Manga Club</p>
                                <p>la Zenia</p>
                                <p>las Colinas Golf</p>
                                <p>las Ramblas Golf</p>
                                <p>Mil Palmeras</p>
                                <p>Pilar de la Horadada</p>
                                <p>Punta Prima</p>
                                <p>San Miguel de Salinas</p>
                                <p>Pinar de Compoverde</p>
                            </div>
                        </div >
                        <div className="p1s17_footerData">
                            <div className="footerData_T">
                                <h2>‎</h2>
                            </div>
                            <div className="footerData_B">
                                <p>Benijofar</p>
                                <p>La Marina</p>
                                <p>Rojales</p>
                                <p>Daya Nueva</p>
                                <p>Daya Vieja</p>
                                <p>Ciudad Quesada</p>
                                <p>el Raso</p>
                                <p>Alicante</p>
                                <p>Torrevieja</p>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="Footer_none">
                    <div className="Footer_menuBar">
                        <h4>Menu</h4>
                        <img src={menuBar} alt="icon" />
                    </div>
                </div>
                <div className="p1s17_border"></div>
            </div >
        </div >
    )
}
