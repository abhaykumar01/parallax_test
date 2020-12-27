import React, {useContext} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {AppContext} from '../../store/AppContext';
import '../../index.css';


function Header() {
    const {appState, appDispatch} = useContext(AppContext);
    const scrollToTop = (e)=>{
       // scroll.scrollToTop();
    }
    const handleSetActive = (to) =>{
        appDispatch({type:'changeSection',payload:{section:to}})
    }
    return (
        <div className="header">
            <div className="leftMenu">LOGO</div>
            <div className="rightMenu">
                <ul>
                    <li><Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        delay={500}
                        onSetActive={handleSetActive}
                        onClick={scrollToTop}
                        >Home</Link></li>
                    <li><Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        delay={500}
                        onClick={scrollToTop}
                        onSetActive={handleSetActive}
                    >Feeds</Link></li>
                    <li><Link
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        delay={500}
                        onClick={scrollToTop}
                        onSetActive={handleSetActive}
                    >Location</Link></li>
                    <li><Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        delay={500}
                        onClick={scrollToTop}
                        onSetActive={handleSetActive}
                    >Community</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;