import axios from 'axios';

const API_URL = 'http://localhost:8080';

export function fetchProducts() {
	return axios(`${API_URL}/products`);
}
