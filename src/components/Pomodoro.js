import React, { useEffect } from "react";

const Pomodoro = ({
	pause,
	restart,
	setPause,
	sec,
	setSec,
	min,
	setMin,
	selected,
	setSelected,
}) => {
	useEffect(() => {
		let interval = setInterval(() => {
			if (!pause) {
				if (sec === 0) {
					if (min !== 0) {
						setSec(59);
						setMin(min - 1);
					} else {
						if (selected === 0) {
							setPause(true);
							let min = 25;
							setMin(min);
						} else if (selected === 1) {
							setPause(true);
							let min = 5;
							setMin(min);
						} else {
							setPause(true);
							let min = 15;
							setMin(min);
						}
						let sec = 0;

						setSec(sec);
					}
				} else {
					setSec(sec - 1);
				}
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [min, sec, pause, setMin, setSec, selected, setPause]);

	const timerMin = min < 10 ? `0${min}` : min;
	const timerSec = sec < 10 ? `0${sec}` : sec;

	return (
		<>
			{timerMin}:{timerSec}
		</>
	);
};

export default Pomodoro;
