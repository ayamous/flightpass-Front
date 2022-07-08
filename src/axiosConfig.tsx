import axios, { AxiosStatic } from 'axios';
import { getCookie } from 'react-use-cookie';

const baseURL = 'http://localhost:8082/';


const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('global_token')
			? 'Bearer ' + localStorage.getItem('global_token')
			: '',
		'Content-Type': 'application/json',
		accept: 'application/json',
		'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
	},
});
	



export default axiosInstance;


//api/user 8090



