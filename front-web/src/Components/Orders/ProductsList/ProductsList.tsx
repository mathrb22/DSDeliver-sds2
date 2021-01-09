import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../types';

type Props = {
	products: Product[];
};

function ProductsList({ products }: Props) {
	return (
		<div className='orders-list-container'>
			<div className='orders-list-items'>
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
}

export default ProductsList;
