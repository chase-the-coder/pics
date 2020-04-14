import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 1vOWNLEZ_JibE1ocecby7-NwekfTuGCtDZoC_dv6nuU'
	}
});
