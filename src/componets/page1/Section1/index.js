import React from 'react';
import './page1section1.scss';
import herobanner1 from '../../../assets/images/herobanner1.svg'
import HeaderTLeft from '../../../common/header/headerTLeft';
import { FaChevronDown } from 'react-icons/fa6';
import { IoFilter, IoSearch } from 'react-icons/io5';

export default function Page1Section1() {
  return (
    <div>
      <div className="P1s1">
        <div className="herobanner1">
          <img src={herobanner1} alt="herobanner-img" />
        </div>
        <div className="blacklayout">
          <h4>Huis kopen in Spanje? Vind uw droomhuis.</h4>
          <div className='P1s1text'>
            <p >Puurspanje is een award-winning makelaar in de Costa Cálida en Costa Blanca Zuid.</p>
          </div>
          <div className="starP1s1">
            <HeaderTLeft />
          </div>
          <div className="herobannerBox">
            <div className="H1box-item1">
              <p>Regio</p>
              <h5>Alle regio’s <FaChevronDown className='DownArrowH1box' /></h5>
            </div>
            <div className="H1box-border"></div>
            <div className="H1box-item2">
              <div className="H1box-I2i1">
                <p>Van</p>
                <h5>€ 0 <FaChevronDown className='DownArrowH1box' /></h5>
              </div>
              <div className="H1box-I2border"></div>
              <div className="H1box-I2i2">
                <p>Tot</p>
                <h5>€ 400.000 <FaChevronDown className='DownArrowH1box' /></h5>
              </div>
            </div>
            <div className="H1box-border"></div>
            <div className="H1box-item3">
              <IoFilter className='Filtericon' />
              <h5>Filters</h5>
            </div>
            <button className="H1box-item4">
              <IoSearch className='Searchicon' />
              <h5>Zoeken</h5>
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}
