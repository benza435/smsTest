import React from 'react';

const JourneyInput = () => {
    return (
        <div className="D-box">
            <form>
                contact number:  
                <input required name="contact" type="tel"></input>
<br/>
                countdown time:  
                <input required name="duration" type="number"></input>
                <button>Start</button>
            </form>
        </div>
    );
};

export default JourneyInput;