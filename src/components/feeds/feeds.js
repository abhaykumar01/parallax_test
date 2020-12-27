import React, { useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import '../../index.css';

function Feeds(props) {
    const { appState, appDispatch } = useContext(AppContext);
    return (
        <div className="feedsContainer" title="Section 2" id="section2">
            <div className={appState.currentSection === "section2" ? "feedColumn starBg col1 animate__slideInRight" : "feedColumn starBg col1"}>
                <div className="text"><span>@buzzfeedfood</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  it to make a type specimen book.</div>
                <div className="image"><div className="instbtn"></div></div>
            </div>
            <div className={appState.currentSection === "section2" ? "feedColumn dottedBg col2 animate__slideInLeft" : "feedColumn dottedBg col2"}>
                <div className="text"><span>@love_food</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  it to make a type specimen book.</div>
                <div className="image"><div className="instbtn"></div></div>
            </div>
            <div className={appState.currentSection === "section2" ? "feedColumn starBg col1 animate__slideInRight" : "feedColumn starBg col1"}>
                <div className="text"><span>@buzzfeedfood</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  it to make a type specimen book.</div>
                <div className="image"><div className="instbtn"></div></div>
            </div>
            <div className={appState.currentSection === "section2" ? "feedColumn dottedBg col2 animate__slideInLeft" : "feedColumn dottedBg col2"}>
                <div className="text"><span>@love_food</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  it to make a type specimen book.</div>
                <div className="image"><div className="instbtn"></div></div>
            </div>
        </div>
    )


}
export default Feeds
