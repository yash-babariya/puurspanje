import React from 'react';
import './header.scss';
import HeaderTLeft from './headerTLeft';
import { MdPhone } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa6';
import logo from '../../assets/logo/logo.svg'
import { IoMenu } from 'react-icons/io5';

export default function Header() {
    return (
        <div className='sticky'>
            <header>
                <div className="header">
                    <div className="headerTopBg">
                        <div className="container">
                            <div className="headerTop">
                                <div className="headerTLeft">
                                    <HeaderTLeft />
                                </div>
                                <div className="headerTRight">
                                    <div className="headerTRmenu">
                                        <MdPhone className='PhoneIcon' />
                                        <a href='Menu'>+34 6 1824 5967</a>
                                    </div>
                                    <div className="headerTRmenu">
                                        <a href='Menu'>Belverzoek</a>
                                    </div>
                                    <div className="headerTRmenu">
                                        <a href='Menu'>Contact</a>
                                    </div>
                                    <div className="headerTRmenu">
                                        <a href='Menu'>Inloggen</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headerBottamBg">
                        <div className="container">
                            <div className="headerBottam">
                                <div className="headerBLeft">
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                                <div className="headerBRight">
                                    <div className="headerBRmenubar">
                                        <div className="headerBRMtext">
                                            <a href="menu">Aanbod</a>
                                        </div>
                                        <div className="headerBRMtext">
                                            <a href="menu">Regio</a>
                                        </div>
                                        <div className="headerBRMtext">
                                            <a href="menu">Aanpak</a>
                                        </div>
                                        <div className="headerBRMtext">
                                            <a href="menu">Meer<FaChevronDown className='DownArrow' /></a>
                                        </div>
                                        <IoMenu className='Menuicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </div >
    )
}
