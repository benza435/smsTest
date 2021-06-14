import React, {useState}from 'react';


const Location = ({location}) => {
    
    return (
        <div className="A-box">
            Your Location is:  <br/>
            {location}
        </div>
    );
};

export default Location;