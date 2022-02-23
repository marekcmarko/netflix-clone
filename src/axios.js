import axios from "axios";

/**base url to make reuqests to movie databse */
const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default instance;
