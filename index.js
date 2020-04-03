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

const onInput = debounce((event) => {
	fetchData(event.target.value);
});

input1.addEventListener('input', onInput);
