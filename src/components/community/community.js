import React from 'react';
import '../../index.css';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';


function Community(props){
    return (
        <div className="community_container" title="Section 4" id="section4">
        <h1>Meet the Community</h1>
        <div className="communityflexContainer" >
        
        <Parallax
                y={[-10,20]}
                offsetYMax={30}
                offsetYMin={-30}
                className="column1">
               <div className="col1 ">column1</div>
            </Parallax>
            <Parallax
                 y={[5,10]}
                offsetYMax={100}
                offsetYMin={-100}
                className="column2">
               <div className="col2 ">column2</div>
            </Parallax>
            <Parallax
                y={[-10,20]}
                offsetYMax={30}
                offsetYMin={-30}
                className="column3">
               <div className="col1">column3</div>
            </Parallax>
            <Parallax
                y={[5,10]}
                offsetYMax={100}
                offsetYMin={-100}
                className="column4">
               <div className="col2">column4</div>
            </Parallax>
        </div>
        </div>
    )
}
export default Community;