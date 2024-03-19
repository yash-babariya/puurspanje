import React from 'react';
import './page3sec1.scss';
import { MdChevronRight } from "react-icons/md";

export default function Page3Sec1() {
    return (
        <div className='P3S1_Bg'>
            <div className="container">
                <div className="P3s1">
                    <span>Blog</span>
                    <MdChevronRight className='RightArrow' />
                    <span>Wat mij nog steeds verbaast over de Spanjaarden</span>
                </div>
            </div>
        </div>
    )
}
