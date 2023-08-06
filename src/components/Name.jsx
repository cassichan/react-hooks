import { useState, useRef, useEffect } from 'react';

export default function Name() {
	const [name, setName] = useState('');
	const renderCount = useRef(0);

	useEffect(() => {
		renderCount.current = renderCount.current + 1;
	}, [name]);
	console.log(renderCount.current);

	return (
		<>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<div>My name is {name}</div>
			<div>I rendered {renderCount.current} times</div>
		</>
	);
}
