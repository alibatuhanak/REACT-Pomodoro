import { useState } from "react";
import "./App.css";
import Pomodoro from "./components/Pomodoro";

function App() {
	const [option, setOption] = useState(false);

	const [selected, setSelected] = useState(0);
	const [pause, setPause] = useState(true);
	// eslint-disable-next-line
	const [restart, setRestart] = useState(false);

	const [sec, setSec] = useState(0);
	const [min, setMin] = useState(25);

	// const handleChangeS1 = e => {
	// 	setMin(e.target.value);
	// 	setSec(0);
	// 	// const { name, value } = e.target;
	// 	// setDetails(prev => {
	// 	// 	return { ...prev, [name]: value };
	// 	// });
	// };
	// const handleChangeS2 = e => {
	// 	setMin(e.target.value);
	// 	setSec(0);
	// };
	// const handleChangeS3 = e => {
	// 	setMin(e.target.value);
	// 	setSec(0);
	// };

	const startClick = () => {
		setPause(!pause);
	};

	const restartClick = () => {
		setSec(0);
		if (selected === 0) {
			setMin(25);
		} else if (selected === 1) {
			setMin(5);
		} else {
			setMin(10);
		}
		setPause(true);
	};

	const s1 = () => {
		setSelected(0);
		setPause(true);
		setMin(25);
		setSec(0);
	};
	const s2 = () => {
		setSelected(1);
		setPause(true);
		setMin(5);
		setSec(0);
	};
	const s3 = () => {
		setSelected(2);
		setPause(true);
		setMin(10);
		setSec(0);
	};

	return (
		<div className="app">
			<div className="main">
				<h1 className="main__logo">cool study.io</h1>
				<div className="pomodoro">
					{!option ? (
						<>
							<div className="pomodoro__btns">
								<button
									className={
										selected === 0
											? "active button-46"
											: "button-46"
									}
									onClick={s1}
								>
									pomodoro
								</button>
								<button
									className={
										selected === 1
											? "active button-46"
											: "button-46"
									}
									onClick={s2}
								>
									short break
								</button>
								<button
									className={
										selected === 2
											? "active button-46"
											: "button-46"
									}
									onClick={s3}
								>
									long break
								</button>
							</div>
							<div className="pomodoro__time">
								<Pomodoro
									restart={restart}
									pause={pause}
									setPause={setPause}
									sec={sec}
									setSec={setSec}
									min={min}
									setMin={setMin}
									selected={selected}
									setSelected={setSelected}
								/>
							</div>
							<div className="pomodoro__srt">
								<button
									className="button-46 button-47"
									onClick={startClick}
								>
									{pause === true ? "start" : "pause"}
								</button>
								<div
									className="pomodoro__rply"
									onClick={restartClick}
								>
									<img src="../replay.png" alt="replay" />
								</div>
								<div
									className="pomodoro__sttngs"
									onClick={() => setOption(true)}
								>
									<img src="../settings.png" alt="settings" />
								</div>
							</div>
						</>
					) : (
						<div className="pomodoro__change">
							<div className="pomodoro__inputs">
								<div
									style={{
										float: "left",
										marginRight: "20px",
									}}
								>
									<label for="pomodoro">pomodoro</label>
									<input
										id="pomodoro"
										type="number"
										name="pomodoro"
									/>
								</div>

								<div
									style={{
										float: "left",
										marginRight: "20px",
									}}
								>
									<label for="short">short</label>
									<input
										id="short"
										type="number"
										name="short"
									/>
								</div>
								<div style={{ float: "left" }}>
									<label for="long">long</label>
									<input
										id="long"
										type="number"
										name="long"
									/>
								</div>
							</div>

							<button
								className="button-46 button-47 button-48"
								onClick={() => setOption(false)}
							>
								confirm
							</button>
						</div>
					)}
				</div>
				<div className="spotify">
					<iframe
						title="uniq"
						style={{ borderRadius: "12px" }}
						src="https://open.spotify.com/embed/playlist/37i9dQZF1E8AZkPccU6HsL?utm_source=generator"
						width="100%"
						height="80"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default App;
