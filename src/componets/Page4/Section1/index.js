import React from 'react';
import './page4section1.scss';
import P4img1 from '../../../assets/images/P4img1.png';
import P4img2 from '../../../assets/images/P4img2.png';
import P4img3 from '../../../assets/images/P4img3.png';
import P4img4 from '../../../assets/images/P4img4.png';
import P4img5 from '../../../assets/images/P4img5.png';

export default function Page4Section4() {
    return (
        <div className='P4s1_Bg '>
            <div className="container">
                <div className="P4s1">
                    <div className="p4s1_1">
                        <div className="p3s4_cart12">
                            <img src={P4img1} alt="img" />
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <span>15 December 2020</span>
                            <div className="p3s4_border"></div>
                        </div>
                    </div>
                    <div className="p4s1_2_3">
                        <div className="p3s4_cart12">
                            <img src={P4img2} alt="img" />
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <span>15 December 2020</span>
                            <div className="p3s4_border"></div>
                        </div>
                        <div className="p3s4_cart12">
                            <img src={P4img3} alt="img" />
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <span>15 December 2020</span>
                            <div className="p3s4_border"></div>
                        </div>
                        <div className="p3s4_cart12">
                            <img src={P4img4} alt="img" />
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <span>15 December 2020</span>
                            <div className="p3s4_border"></div>
                        </div>
                        <div className="p3s4_cart12">
                            <img src={P4img5} alt="img" />
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <span>15 December 2020</span>
                            <div className="p3s4_border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
