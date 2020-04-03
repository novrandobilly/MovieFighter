const fetchData = async (searchTerm) => {
	const response = await axios.get('https://www.omdbapi.com/', {
		params: {
			apikey: 'e55cd6f4',
			s: `${searchTerm}`
		}
	});
	console.log(response.data);
};

const input1 = document.querySelector('#input1');
let timeOutId;

input1.addEventListener('input', (event) => {
	if (timeOutId) {
		clearTimeout(timeOutId);
	}
	timeOutId = setTimeout(() => {
		fetchData(event.target.value);
	}, 750);
});
