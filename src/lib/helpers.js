async function getData(url = '') {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
	});
	return response.json();
}

async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
		body: JSON.stringify(data),
	});
	return response.json();
}

function handleExpressErr(err) {
	window.flashes([{ msg: err.message }]);
}

export { getData, postData, handleExpressErr };
