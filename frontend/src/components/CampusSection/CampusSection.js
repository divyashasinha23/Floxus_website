import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './CampusSection.css';

function CampusSection() {
    return (
        <>
        <div className ="CampusWrapper">
        <div className = "CampusContainer">
            <div className ="Campus_conatiner">
                <div className="campusContent">
                    <h1 className="Heading">
                        Trusted across<br></br>
                        <span> 5+ College Campus </span>
                        in india.
                    </h1>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy
                    </p>
                    <button className="campusButton">Book Demo
                    <FaIcons.FaArrowRight style={{ marginLeft: '10px' }} />
                    </button>
                </div>
            </div>
            <div class="Campus_imageContainer"></div>
        </div>
        </div>
        
            
        </>
    )
}

export default CampusSection
