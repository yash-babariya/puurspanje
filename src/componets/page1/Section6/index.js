import React from 'react'
import './page1section6.scss';
import cartimg1 from '../../../assets/images/cartimg1.svg'
import cartimg2 from '../../../assets/images/cartImg2.svg'
import cartimg3 from '../../../assets/images/cartimg3.svg'


export default function Page1Section6() {
    return (
        <div className='P1s6bg'>
            <div className="container">

                <div className="P1s6">
                    <div className="P1s6-part">
                        <p className="p1s6-part-heading">Huis kopen aan de Costa Cálida</p>
                        <div className="p1s6-cart">
                            <div className="part-box">
                                <div className="p1s6-img">
                                    <img src={cartimg1} alt="img" />
                                </div>
                                <div className="p1s6-text">
                                    <h6>Murcia</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="part-box">
                                <div className="p1s6-img">
                                    <img src={cartimg2} alt="img" />
                                </div>
                                <div className="p1s6-text">
                                    <h6>Mazarron</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="part-box">
                                <div className="p1s6-img">
                                    <img src={cartimg3} alt="img" />
                                </div>
                                <div className="p1s6-text">
                                    <h6>Cartagena</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="P1s6-part">
                        <p className="p1s6-part-heading">Huis kopen aan de Costa Blanca</p>
                        <div className="p1s6-cart">
                            <div className="part-box">
                                <div className="p1s6-img">
                                    <img src={cartimg1} alt="img" />
                                </div>
                                <div className="p1s6-text">
                                    <h6>Mazarron</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="part-box">
                                <div className="p1s6-img">
                                    <img src={cartimg2} alt="img" />
                                </div>
                                <div className="p1s6-text">
                                    <h6>San Pedro del Pinatar</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="part-box">
                                <div className="p1s6-img">
                                    <img src={cartimg3} alt="img" />
                                </div>
                                <div className="p1s6-text">
                                    <h6>Altaona Village</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
