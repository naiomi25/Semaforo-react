import React from "react";
import { useState, useEffect } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [on, seton] = useState('')
	const [ButtonLigthPurple, setButtonLigthPurple] = useState(false)
	const [automatic, setautomatic] = useState (false)

	const LigthPurpleShow = () => { setButtonLigthPurple(!ButtonLigthPurple) }
	const ChooseAutomatic = () => { setautomatic (!automatic) }


	useEffect(() => {
		let intervalos = null
		if (automatic) {

			intervalos = setInterval(() => {
				if (on === 'red') { seton('yellow') }
				else if (on === 'yellow') { seton('green') }
				else if (on === 'green') { seton('purple') }
				else{seton('red')}

			}, 1000);
		}
		return ()=> clearInterval(intervalos);
	},[automatic,on,ButtonLigthPurple])

	return (
		<>
			<div className="Mastil"></div>
			<div className="Semaforo">
				<div className={`Ligth LigthRed ${on === 'red' ? 'Pulsador' : ''}`}
					onClick={() => seton('red')}></div>

				<div className={`Ligth LigthYellow ${on === 'yellow' ? 'Pulsador' : ''}`}
					onClick={() => seton('yellow')}></div>

				<div className={`Ligth LigthGreen ${on === 'green' ? 'Pulsador' : ''}`}
					onClick={() => seton('green')}></div>

				{ButtonLigthPurple && (
					<div className={`Ligth LigthPurple ${on === 'purple' ? 'Pulsador' : ''}`}
						onClick={() => seton('purple')}></div>
				)}
			</div>
			<div className="button-container mt-3 mb-3">
				<button type="button" className="btnbtn-outline-dark button-right"
					onClick={LigthPurpleShow}>Luz morada</button>
				<button type="button" className="btnbtn-outline-dark button-left"
					onClick={ChooseAutomatic}> {automatic ? 'Off': 'Automático-On'}</button>

			</div>

		</>
	);
};

export default Home;

