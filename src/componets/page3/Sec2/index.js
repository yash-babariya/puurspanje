import React from 'react';
import './page3sec2.scss';
import { BsDot } from "react-icons/bs";
import P3img1 from '../../../assets/images/P3img1.png';
import P3img2 from '../../../assets/images/P3img2.png';
import P3img3 from '../../../assets/images/P3img3.png';
import P3img4 from '../../../assets/images/P3img4.png';


export default function Page3Sec2() {
    return (
        <div className='P3s2_Bg'>
            <div className="container">
                <div>
                    <div className="p3s2">
                        <h5 className="containerS">Wat mij nog steeds verbaast over de Spanjaarden</h5>
                        <div className="containerS P3s1">
                            <span>15 December 2020</span>
                            <BsDot className='Dot' />
                            <span>5 min leestijd</span>
                        </div>
                        <p className="containerS">Iedereen heeft wel een mening over Spanje en de inwoners van het land. Zo denkt men vaak in het buitenland dat Spanjaarden lui zijn en alleen maar van het leven willen genieten met hun fiesta, siësta en sangria.</p>

                        <div className="P3s2_img">
                            <img src={P3img1} alt="img" />
                        </div>
                        <p className="containerS">De Salzillo-processie is wel de belangrijkste processie met de Semana Santa van Murcia. Bij de eerste zonnestraal op goede vrijdag om zeven uur wordtvolgens de standaard van het broederschap- het gezicht van de  Dolorosa de Moeder der Smarten. </p>
                        <p className="containerS">Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden de katholieken het gebied op de Moren. De moskeeën verdwenen en de kerken kwamen op. In het jaar 1266 kregen de gildes het hier voor het zeggen. Er ontstonden historische straten die we vandaag de dag nog kennen; Trapería, Platería.</p>
                        <div className="P3s2_imgs">
                            <div className="containerS P3s2_img2">
                                <img src={P3img2} alt="img" />
                            </div>
                            <div className="containerS P3s2_img3_4">
                                <img src={P3img3} alt="img" />
                                <img src={P3img4} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
