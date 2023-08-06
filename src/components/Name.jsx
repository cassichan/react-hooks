import { useState, useRef, useEffect } from 'react';

export default function Name() {
	const [name, setName] = useState('');
	const inputRef = useRef();

	const focus = () => {
		inputRef.current.focus();
	};
	return (
		<>
			<input
				ref={inputRef}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<div>My name is {name}</div>
			<button onClick={focus}>Focus</button>
		</>
	);
}
