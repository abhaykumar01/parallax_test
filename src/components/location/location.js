import React, {useEffect, useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../../index.css';
import axios from 'axios';

function Location(props){
   // console.log("location>>>>", props)
    //AIzaSyBZwJbBDvPU-dDz0picQMww1tK8QTHziIM
    const [map, setMap] = useState();
    useEffect( () => {
        const url = 'https://snazzymaps.com/style/116734/sg-test-exercise';
        const headers={ 
            'headers': { 
                'Access-Control-Allow-Origin': '*',                
               'Access-Control-Allow-Methods': "GET"
             }
         }
        axios.get(url, headers)
        .then( response =>{
            //console.log(response)
            setMap(response.data)
        })
        
    })
return(
    <div className="location" title="Section 3" id="section3">
   
    </div>
)
}

export default Location;