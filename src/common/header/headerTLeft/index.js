import React from 'react';
import './headerTLeft.scss';
import { IoMdStar } from 'react-icons/io';

export default function HeaderTLeft() {
    return (
        <div className='headerTLeft'>
            <div className="star">
                <IoMdStar className='StarIcon' />
                <IoMdStar className='StarIcon' />
                <IoMdStar className='StarIcon' />
                <IoMdStar className='StarIcon' />
                <IoMdStar className='StarIcon' />
            </div>
            <div className="headerTLtext">
                <p>4.8 / 5 &nbsp; 65 reviews op Facebook</p>
            </div>
        </div>
    )
}
