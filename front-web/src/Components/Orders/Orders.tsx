import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api';
import OrderLocation from './OrderLocation/OrderLocation';
import './orders.css';
import ProductsList from './ProductsList/ProductsList';
import StepsHeader from './StepsHeader/StepsHeader';
import { Product } from './types';

function Orders() {
	const [products, setProducts] = useState<Product[]>([]);

	console.log(products);

	useEffect(() => {
		window.scrollTo(0, 0);
		fetchProducts()
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='orders-container'>
			<StepsHeader />
			<ProductsList products={products} />
			<OrderLocation />
		</div>
	);
}

export default Orders;
