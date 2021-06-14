import React from 'react';

const TimeInput = () => {
    return (
        <div className="C-box">
            <form>
                enter a countdown time:<br/>
                <input required name="duration" type="number"></input>
                <button>Start</button>
            </form>
</div>
    );
};

export default TimeInput;