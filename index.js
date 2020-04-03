const fetchData = async () => {
	const response = await axios.get('https://www.omdbapi.com/', {
		params: {
			apikey: 'e55cd6f4',
			// s: 'avengers'
			i: 'tt4154756'
		}
	});
	console.log(response.data);
};

fetchData();
