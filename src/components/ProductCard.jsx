import { FaShoppingCart } from "react-icons/fa";
const ProductCard = ({ product, onAddToCart }) => {
    const { name, price } = product
    return (
        <div className="bg-gray-800 rounded-sm p-3 w-50 h-auto">
            <h1 className="text-center text-white font-bold h-12 flex items-center justify-center">
                {name}
            </h1>

            <p className="text-blue-600 text-center font-bold mt-1">
                ${price}
            </p>

            <div className="flex justify-center">
                <button className="flex items-center
                 gap-2 text-white bg-blue-600 px-3 py-1
                 my-3 rounded cursor-pointer"
                onClick={() =>
                    onAddToCart(product)
                }>
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}

export default ProductCard