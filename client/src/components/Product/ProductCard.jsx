// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
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
                        199
                    </p>
                    <p className="line-through opacity-50">{product.price}</p>
                    <p className="text-green-600 font-semibold">70% off</p>
                </div>
            </div>
        </div>
    )
}

// Add propTypes validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
