import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';

import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="h-[20rem]">
                <img className='h-full w-full object-cover object-left-top ' src={product.imageUrl} alt="" />
            </div>
            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p>
                        {product.title}
                    </p>
                </div>
                <div className=" flex items-center space-x-2">
                    <p className="font-semibold">
                        ₹{product.discountedPrice}
                    </p>
                    <p className="line-through opacity-50">{product.price}</p>
                    <p className="text-green-600 font-semibold">{product.discountPercent}% off</p>
                </div>
            </div>
        </div>
    )
}

// Add propTypes validation
ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountedPrice: PropTypes.number.isRequired,
        discountPercent: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;
