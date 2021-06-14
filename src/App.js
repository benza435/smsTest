import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import TimeDisplay from './components/TimeDisplay';
import Location from './components/Location';
import JourneyInput from './components/JourneyInput';
import Stop from './components/Stop';

function App() {
	const [location, setLocation] = useState('53° 23\' 36" N, -2° 33\' 42" E');
	const [duration, setDuration] = useState({
		initialMinute: 60,
		initialSeconds: 0,
	});
	const [contact, setContact] = useState(null);
	const [complete, setComplete] = useState(null);
	//null, not started.  false, journey in progress... poll location and check timer.  true, send completion message.
	const [alert, setAlert] = useState(null);
	//  numerical alert status 0-4ish.
	//  0 no alert.
	//  1 alert user timer 1 is running low.
	//  2 inform user and contact that timer 1 has expired
	//  3 send user location to contact

	return (
		<>
			<Header />
			<Location location={location} />
			<TimeDisplay duration={duration} />
			<JourneyInput />
			<Stop />
		</>
	);
}

export default App;
