import { useState, useEffect } from 'react';

export default function WindowMeasure() {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerheight);

	const handleResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<p>Width: {width}</p>
			<p>Height: {height}</p>
		</>
	);
}
