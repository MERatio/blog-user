import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Bus from '../utils/Bus';

function Flashes() {
	const [flashes, setFlashes] = useState([]);

	function deleteFlash(flashId) {
		const newFlashes = flashes.filter((flash) => flash.id !== flashId);
		setFlashes(newFlashes);
	}

	useEffect(() => {
		Bus.addListener('flashes', (flashes) => {
			const flashesWithId = flashes.map((flash) => ({
				...flash,
				id: nanoid(),
			}));
			setFlashes(flashesWithId);
		});
	}, []);

	useEffect(() => {
		if (flashes.length > 0) {
			const timeoutId = setTimeout(() => setFlashes([]), 4000);
			return () => clearTimeout(timeoutId);
		}
	}, [flashes]);

	return (
		<React.Fragment>
			{flashes.map((flash) => (
				<div
					key={flash.id}
					className={`alert alert-${flash.type || 'danger'} alert-dismissible`}
					role="alert"
				>
					{flash.msg}
					<button
						type="button"
						className="close"
						aria-label="Close"
						onClick={() => deleteFlash(flash.id)}
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			))}
		</React.Fragment>
	);
}

export default Flashes;
