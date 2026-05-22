import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { toast } from 'react-toastify';
import emptyImg from '../../assets/images/img/404.png'

function CheckOut() {

    // data extraction
    const {
        cart,
        clearCart
    } = useContext(CartContext);

    // form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        payment: ''
    })

    // check if all fields are filled
    const isFormValid =
        formData.firstName.trim() !== '' &&
        formData.lastName.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.phone.trim() !== '' &&
        formData.address.trim() !== '' &&
        formData.city.trim() !== '' &&
        formData.postalCode.trim() !== '' &&
        formData.payment !== ''

    // total price function
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity + 10;
    }, 0)

    // total items function
    const totalItem = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0)

    const handleCheckOut = () => {

        // prevent checkout if form is incomplete
        if (!isFormValid) {
            toast.error("Please fill all fields");
            return;
        }

        toast.success("Order placed successfully");
        clearCart();
    }

    // empty cart condition
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

    return (
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Checkout Form */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">

                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                        Checkout
                    </h1>

                    {/* Personal Info */}
                    <div className="mb-8">

                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                            Personal Information
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">

                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={(e) =>
                                    setFormData({ ...formData, firstName: e.target.value })
                                }
                                className="w-full p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary"
                            />

                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={(e) =>
                                    setFormData({ ...formData, lastName: e.target.value })
                                }
                                className="w-full p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary"
                            />

                            <input
                                required
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary sm:col-span-2"
                            />

                            <input
                                required
                                type="text"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                                className="w-full p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary sm:col-span-2"
                            />

                        </div>

                    </div>

                    {/* Shipping Address */}
                    <div className="mb-8">

                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                            Shipping Address
                        </h2>

                        <div className="grid gap-4">

                            <input
                                required
                                type="text"
                                placeholder="Street Address"
                                value={formData.address}
                                onChange={(e) =>
                                    setFormData({ ...formData, address: e.target.value })
                                }
                                className="w-full p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary"
                            />

                            <div className="grid sm:grid-cols-2 gap-4">

                                <input
                                    required
                                    type="text"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={(e) =>
                                        setFormData({ ...formData, city: e.target.value })
                                    }
                                    className="w-full p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary"
                                />

                                <input
                                    required
                                    type="text"
                                    placeholder="Postal Code"
                                    value={formData.postalCode}
                                    onChange={(e) =>
                                        setFormData({ ...formData, postalCode: e.target.value })
                                    }
                                    className="w-full p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary"
                                />

                            </div>

                        </div>

                    </div>

                    {/* Payment */}
                    <div>

                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                            Payment Method
                        </h2>

                        <div className="space-y-4">

                            <label className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl cursor-pointer border dark:border-gray-700">

                                <input
                                    type="radio"
                                    name="payment"
                                    value="Cash On Delivery"
                                    onChange={(e) =>
                                        setFormData({ ...formData, payment: e.target.value })
                                    }
                                />

                                <span>Cash On Delivery</span>

                            </label>

                            <label className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl cursor-pointer border dark:border-gray-700">

                                <input
                                    type="radio"
                                    name="payment"
                                    value="Credit Card"
                                    onChange={(e) =>
                                        setFormData({ ...formData, payment: e.target.value })
                                    }
                                />

                                <span>Credit Card</span>

                            </label>

                        </div>

                    </div>

                </div>

                {/* Order Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 h-fit">

                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                        Order Summary
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between text-gray-600 dark:text-gray-300">
                            <span>Products</span>
                            <span>{totalItem}</span>
                        </div>

                        <div className="flex justify-between text-gray-600 dark:text-gray-300">
                            <span>Shipping</span>
                            <span>$10</span>
                        </div>

                        <div className="border-t dark:border-gray-700 pt-4 flex justify-between text-lg font-bold text-gray-800 dark:text-white">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(1)}</span>
                        </div>

                    </div>

                    <button
                        type='submit'
                        disabled={!isFormValid}
                        onClick={handleCheckOut}
                        className={`w-full mt-6 py-3 rounded-xl font-semibold text-white duration-300
                            
                            ${isFormValid
                                ? 'bg-primary hover:scale-105'
                                : 'bg-gray-400 cursor-not-allowed'
                            }
                        `}
                    >
                        Place Order
                    </button>

                </div>

            </div>

        </section>
    )
}

export default CheckOut