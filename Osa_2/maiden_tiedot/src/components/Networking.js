import axios from 'axios';

const Networking = {

    fetchCountries: (setCountries) => {
        console.log('Network ->')
        console.log('...requesting country data')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('...country data received')
                setCountries(response.data)
            })
    },
    fetchCapitalWeather: (shown, setWeather) => {
        if (shown != null) {
            console.log('...requesting weather data')
            const weatherKey = '7720a08f86a20b9e6e892c9856041578'
            axios
                .get(`http://api.weatherstack.com/current?access_key=${weatherKey}&query=${shown.name}`)
                .then(response => {
                    console.log('...weather data received')
                    setWeather(response.data)
                })
        }
    }
}

export default Networking