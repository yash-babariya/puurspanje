import React from 'react';
import './page2section5.scss';
import Page2Sec5img from '../../../assets/images/Page2Sec5img.png';
import P2rightArrow from '../../../assets/icons/P2rightArrow.svg';

export default function Page2Section5() {
    return (
        <div className='P2s5_Bg'>
            <div className="container">
                <div className="P2s5">
                    <div className="P2S5_img">
                        <img src={Page2Sec5img} alt="img" />
                    </div>
                    <div className="P2s2_cartText">
                        <div className="p2s2_Text_T">
                            <h4>Calblanque</h4>
                            <p>Stel je een afgelegen strand van gouden zand, omgeven door heuvels bedekt met prachtige flora en fauna. Als dit is uw idee van het paradijs, dan Calblanque National Park is voor jou.</p>
                        </div>
                        <div className="p2s2_arrow">
                            <img src={P2rightArrow} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
