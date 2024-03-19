import React from 'react';
import './page1section8.scss';
import cartimg4 from '../../../assets/images/cartimg4.svg';
import cartimg5 from '../../../assets/images/cartimg5.svg';
import cartimg6 from '../../../assets/images/cartimg6.svg';


export default function Page1Section8() {
    return (
        <div className='P1s8bg'>
            <div className="container">
                <div className="P1s8">
                    <div className="heading">
                        <h4>Uitgelichte woningen in Spanje</h4>
                    </div>
                    <div className="P1s8scroll">
                        <div className="P1s8-cart">

                            <div className="P1s8-box">
                                <img src={cartimg4} alt="cartimg" />
                                <h5>Luxe villa in Alicante</h5>
                                <p>€ 550.000</p>
                            </div>


                            <div className="P1s8-box">
                                <img src={cartimg5} alt="cartimg" />
                                <h5>Luxe villa in Alicante</h5>
                                <p>€ 550.000</p>
                            </div>


                            <div className="P1s8-box">
                                <img src={cartimg6} alt="cartimg" />
                                <h5>Luxe villa in Alicante</h5>
                                <p>€ 550.000</p>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}
