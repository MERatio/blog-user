async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response.json();
}

function handleExpressErr(err) {
	window.flashes([{ msg: err.message }]);
}

export { postData, handleExpressErr };
