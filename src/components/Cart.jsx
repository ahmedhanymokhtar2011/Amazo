import React from 'react'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

import emptyImg from '../assets/images/img/404.png'
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Cart() {

    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
    } = useContext(CartContext);

    //   if consetion empty cart 
    if (cart.length === 0) {
        return (
            <div className='min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-4'>

                {/* Empty cart image */}
                <img
                    src={emptyImg}
                    alt="Empty Cart"
                    className='w-[300px] sm:w-[400px] md:w-[500px] object-contain'
                />

                {/* Empty cart text */}
                <h1 className='text-3xl sm:text-4xl font-bold text-gray-700 dark:text-white mt-6 text-center'>
                    Your Cart Is Empty
                </h1>

                {/* Small description */}
                <p className='text-gray-500 mt-3 text-center max-w-md'>
                    Looks like you haven’t added anything to your cart yet.
                </p>

            </div>
        )
    }
    //total price function

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    //total items function 
    const totalItem = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0)


    return (
        <section className='min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4'>

            <div className='max-w-6xl mx-auto'>

                {/* Heading */}
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>
                        Shopping Cart
                    </h1>

                    <p className='text-gray-500 mt-2'>
                        Your selected products
                    </p>
                </div>

                {/* Cart Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                    {/* Products */}
                    <div className='lg:col-span-2 space-y-5 max-h-[500px] overflow-y-auto pr-2'>

                        {
                            cart.map((item) => (

                                <div
                                    key={item.id}
                                    className='bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 flex flex-col sm:flex-row items-center gap-5'
                                >

                                    {/* Product Image */}
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className='w-32 h-32 object-cover rounded-xl'
                                    />

                                    {/* Product Info */}
                                    <div className='flex-1 w-full'>

                                        <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>
                                            {item.title}
                                        </h2>

                                        <p className='text-gray-500 mt-2'>
                                            {item.category}
                                        </p>
                                        {/*incease  and decrease btns */}
                                        <div>
                                            <button
                                                className='bg-primary px-3 py-1 rounded'
                                                onClick={() => decreaseQuantity(item.id)}>
                                                -
                                            </button>
                                            <span
                                                className='px-2'
                                            >{item.quantity}</span>
                                            <button
                                                className='bg-primary px-3 py-1 rounded'
                                                onClick={() => increaseQuantity(item.id)}>
                                                +
                                            </button>

                                        </div>
                                        <div className='mt-4 flex items-center justify-between'>

                                            <span className='text-2xl font-bold text-primary'>
                                                ${item.price}
                                            </span>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className='bg-red-500 flex  items-center gap-2 hover:bg-red-600 duration-300 text-white px-4 py-2 rounded-xl'>
                                                Delete
                                                <BiTrash />
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                    {/* Summary */}
                    <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 h-fit'>

                        <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
                            Order Summary
                        </h2>

                        <div className='space-y-4'>

                            <div className='flex justify-between text-gray-600 dark:text-gray-300'>
                                <span>Total Items</span>
                                <span>{totalItem}</span>
                            </div>

                            <div className='flex justify-between text-gray-600 dark:text-gray-300'>
                                <span>Total Price</span>
                                <span>${totalPrice.toFixed(1)}</span>
                            </div>

                        </div>
                        {/* Clear Cart Button */}
                        <button
                            onClick={clearCart}
                            className='w-full mt-4 flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 duration-300 text-white py-3 rounded-xl font-semibold'
                        >
                            Clear All Cart
                            <BiTrash />
                        </button>
<Link to="/checkout">
                        <button className='w-full mt-6 bg-primary hover:scale-105 duration-300 text-white py-3 rounded-xl font-semibold'>
                            Checkout
                        </button>
</Link>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Cart