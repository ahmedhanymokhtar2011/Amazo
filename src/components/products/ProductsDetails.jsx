import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { getSingleProduct } from '../productsAPI'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { SiKia } from 'react-icons/si'
import SkeletonCard from '../SkeletonCard'

function ProductsDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const [mainImage, setMainImage] = useState("");

    const [loading, setLoading] = useState(true);

    //cart
    const {cart, addToCart } = useContext(CartContext);
    //is in cart?
    const isInCart = product && cart.some(
        item => item.id === product.id
    );

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getSingleProduct(id);
            setProduct(data)
            setMainImage(data.thumbnail)
            setLoading(false)
        }
        fetchProduct();
    }, [id])

    if (loading) return <SkeletonCard/>

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Product Image */}
                <div>
                    <img
                        src={mainImage}
                        alt={product.title}
                        className="w-full rounded-xl shadow-lg"
                    />

                    {/* Extra Images */}
                    <div className="mt-4 grid grid-cols-4 gap-3">
                        {[product.thumbnail, ...(product.images || [])].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={product.title}
                                onClick={() => setMainImage(img)}
                                className={`rounded-lg cursor-pointer border-2 hover:scale-105 duration-200 
                                ${mainImage === img ? "border-blue-500" : "border-transparent"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {product.description}
                    </p>

                    <p className="text-xl font-semibold mb-2">
                        Price: ${product.price}
                    </p>

                    <p className="mb-2">⭐ Rating: {product.rating}</p>

                    <p className="mb-6 text-sm text-gray-500">
                        Brand: {product.brand}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button
                            disabled={isInCart}
                            onClick={()=> addToCart(product)}
                            className={`bg-primary text-white px-6 py-2 rounded-lg hover:scale-105 duration-200
                                 ${isInCart ? "bg-third cursor-not-allowed" : "bg-primary"}`}>
                            {isInCart?"Added to cart":"Add to cart"}
                        </button>
<Link to="/checkout">
                        <button
                            disabled={isInCart}
                            onClick={()=> addToCart(product)}
                                className="border px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 duration-200">
                            Buy Now
                            </button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails