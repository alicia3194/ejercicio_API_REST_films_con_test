const axios = require("axios");

async function fetchFilm() {
  try {
    const apiKey = api.env.API_KEY;
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${Title}`;
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Error API");
    }
  } catch (error) {
    console.log("Error API");
  }
}

fetchFilm();
