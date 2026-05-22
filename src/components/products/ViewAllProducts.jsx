import React, { useEffect, useState } from 'react'
import { allCloths } from '../productsAPI'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import SkeletonCard from '../SkeletonCard';

function ViewAllProducts({ searchTerm }) {
        const [products, setProducts] = useState([]);

    //search bar
const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    console.log(filteredProducts)
    // State to store fetched products

    // State to handle loading state
    const [loading, setLoading] = useState(true);

    // State to handle errors
    const [error, setError] = useState(null);

    // Fetch data when component mounts
    useEffect(() => {
        allCloths()
            .then(data => {
                // Save products into state
                setProducts(data);

                // Stop loading
                setLoading(false);
            })
            .catch(err => {
                // Handle error if request fails
                setError("there are a problem");

                // Stop loading
                setLoading(false);
            })
    }, [])

    // Show loading message while fetching data
    if (loading) return <SkeletonCard/>

    // Show error message if something goes wrong
    if (error) return <h2>there are a problem, we work for fix it...</h2>

    return (
        <div className='mt-14 mb-12'>
            <div className='container'>

                {/* Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-sm text-primary'>
                        Top  selling products for you
                    </p>

                    <h1 data-aos="fade-up" className='text-3xl font-bold'>
                        All products
                    </h1>

                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* Products grid */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>

                        {/* Loop through products and render each product card */}
                        {
                            filteredProducts.map((data) => (
                                                        <Link
                                                            key={data.id}
                                                            to={`/product/${data.id}`}
                                                            className="block w-full"
                                                        >
                                
                                <div
                                    key={data.id}
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    className='space-y-3'
                                >
                                    {/* Product image */}
                                    <img
                                        src={data.thumbnail}
                                        alt={data.title}
                                        className='h-[220px] w-[150px] object-cover rounded-md'
                                    />

                                    {/* Product info */}
                                    <div>
                                        {/* Product title */}
                                        <h3 className='font-semibold'>
                                            {data.title}
                                        </h3>

                                        {/* Product color (if available) */}
                                        <p className='text-sm text-gray-600'>
                                            {data.color}
                                        </p>

                                        {/* Product rating */}
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-400' />
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                    </div>
                                                            </Link>
                                    
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewAllProducts;