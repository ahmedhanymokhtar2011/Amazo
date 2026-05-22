import { createContext, useEffect, useState } from "react";

import { toast } from 'react-toastify';
// Create global cart context
// This allows any component in the app
// to access cart data without prop drilling
export const CartContext = createContext();

// Create Cart Provider component
// This component wraps the entire app
// and provides cart state + functions
export const CartProvider = ({ children }) => {

    // Cart state
    // useState stores all cart products
    // The function runs only once when the app loads
    const [cart, setCart] = useState(() => {

        // Get saved cart data from localStorage
        const savedCart = localStorage.getItem("cart");

        // If cart data exists:
        // convert JSON string back into array
        // otherwise return empty array
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Function to add products to cart
    const addToCart = (product) => {

        // Check if product already exists in cart
        // by comparing product ids
        const existingProduct = cart.find(
            item => item.id === product.id
        );

        // If product already exists
        if (existingProduct) {

            // Loop through cart items
            // and increase quantity of matched product
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            // Update cart state
            setCart(updatedCart);
        } else {

            // If product does not exist in cart
            // add new product with quantity = 1
            setCart([
                ...cart,
                { ...product, quantity: 1 }
            ]);
        }
        toast.success("Product Added To Cart Successfully!")

    };

    // Function to remove product from cart
    const removeFromCart = (id) => {

        // Filter all products except selected one
        const filteredCart = cart.filter(
            item => item.id !== id
        );

        // Update cart state
        setCart(filteredCart);
    };


    //function to increase quantity

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart)
    }


        //function to decrease quantity

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item => item.id === id  && item.quantity>1? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(updatedCart)
    }

    //function to clear the cart
    const clearCart = () => {
        setCart([]);
    };
    
    // Save cart data in localStorage
    // every time cart changes
    useEffect(() => {

        // Convert cart array into JSON string
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }, [cart]);

    return (

        // Provide cart data and functions
        // to all child components
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart
            }}
        >

            {/* Render app components */}
            {children}

        </CartContext.Provider>
    );
};