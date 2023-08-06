import { useState } from 'react';

export default function Name() {
	const [name, setName] = useState('');
	return (
		<>
			<input
				type="text"
				value="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<div>My name is {name}</div>
		</>
	);
}
