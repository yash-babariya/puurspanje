import React from 'react';
import './page3sec3.scss';
import P3img5 from '../../../assets/images/P3img5.png';
import P3img6 from '../../../assets/images/P3img6.png';

export default function Page3Sec3() {
    return (
        <div className='P3S3_Bg'>
            <div className="containerS">
                <div className="P3S3">
                    <h5>Wonen In Murcia</h5>
                    <div className="p3s3_details">
                        <p>De Salzillo-processie is wel de belangrijkste processie met de Semana Santa van Murcia. Bij de eerste zonnestraal op goede vrijdag om zeven uur wordtvolgens de standaard van het broederschap- het gezicht van de  Dolorosa de Moeder der Smarten. </p>
                        <p>Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden de katholieken het gebied op de Moren. De moskeeën verdwenen en de kerken kwamen op. In het jaar 1266 kregen de gildes het hier voor het zeggen. Er ontstonden historische straten die we vandaag de dag nog kennen; Trapería, Platería.</p>
                        <p>Er ontstonden historische straten:</p>
                        <ul>
                            <li>Tot in de middeleeuwen waren de Moren de baas</li>
                            <li>Hierna veroverden de katholieken het gebied op de Moren</li>
                            <li>De moskeeën verdwenen en de kerken kwamen op</li>
                            <li>In het jaar 1266 kregen de gildes het hier voor het zeggen</li>
                        </ul>
                    </div>
                </div>
                <div className="P3S3_img">
                    <img src={P3img5} alt="img" />
                    <img src={P3img6} alt="img" />
                </div>
                <div className="P3S3">
                    <h5>Wonen In Murcia</h5>
                    <div className="p3s3_details">
                        <p>De Salzillo-processie is wel de belangrijkste processie met de Semana Santa van Murcia. Bij de eerste zonnestraal op goede vrijdag om zeven uur wordtvolgens de standaard van het broederschap- het gezicht van de  Dolorosa de Moeder der Smarten. </p>
                        <p>Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden de katholieken het gebied op de Moren. De moskeeën verdwenen en de kerken kwamen op. In het jaar 1266 kregen de gildes het hier voor het zeggen. Er ontstonden historische straten die we vandaag de dag nog kennen; Trapería, Platería.</p>
                    </div>
                </div>
                <div className="p3s3_last">
                    <p>Born: <span>Spanje Vandaag</span></p>
                </div>
            </div>
        </div>
    )
}
