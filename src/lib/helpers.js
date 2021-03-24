async function getData(url = '') {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			},
		});
		return response.json();
	} catch (err) {
		window.flashes([{ msg: 'Something went wrong, please try again later.' }]);
	}
}

async function postData(url = '', data = {}) {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			},
			body: JSON.stringify(data),
		});
		return response.json();
	} catch (err) {
		window.flashes([{ msg: 'Something went wrong, please try again later.' }]);
	}
}

function handleExpressErr(err) {
	window.flashes([{ msg: err.message }]);
}

export { getData, postData, handleExpressErr };
