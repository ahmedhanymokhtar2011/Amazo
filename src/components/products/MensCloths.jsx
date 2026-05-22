import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { mensCloths } from '../productsAPI'
import { Link } from 'react-router-dom'
import SkeletonCard from '../SkeletonCard';

const MensCloths = () => {

    // State to store products data
    const [products, setProducts] = useState([])

    // State to handle loading status
    const [loading, setLoading] = useState(true)

    // State to handle errors
    const [error, setError] = useState(null)

    // Fetch mens products on component mount
    useEffect(() => {
        mensCloths()
            .then(data => {
                setProducts(data)     // Save fetched data
                setLoading(false)     // Stop loading
            })
            .catch(err => {
                console.log(err)      // Debug error in console
                setError("There is a problem, we are working to fix it...")
                setLoading(false)
            })
    }, [])

    // Show loading state
    if (loading) return <SkeletonCard/>

    // Show error state
    if (error) return <p>{error}</p>

    return (
        <div className='mt-14 mb-12'>
            <div className='container'>

                {/* Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-sm text-primary'>
                        Top selling products for you
                    </p>

                    <h1 data-aos="fade-up" className='text-3xl font-bold'>
                        Mens Products
                    </h1>

                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* Products grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>

                    {/* Loop through products and render cards */}
                    {products.map((item) => (
                        <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            className="block w-full"
                        >
                            <div
                                data-aos="fade-up"
                                data-aos-delay={item.aosDelay}
                                className='space-y-3 relative z-10'
                            >
                                {/* Product image */}
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className='h-[220px] w-full object-cover rounded-md'
                                />

                                {/* Product details */}
                                <div>
                                    {/* Title */}
                                    <h3 className='font-semibold'>
                                        {item.title}
                                    </h3>

                                    {/* Color (optional field) */}
                                    <p className='text-sm text-gray-600'>
                                        {item.color || "No color info"}
                                    </p>

                                    {/* Rating */}
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{item.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default MensCloths