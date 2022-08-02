import React from "react";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';

import PageHero from "../layout/PageHero";
import CheckoutContent from "../components/cart/CheckoutContent";
import CartEmpty from '../components/cart/CartEmpty';


const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: .3 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
}


const Checkout = () => {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const cart = useSelector((state) => state.cart.items);
    const { name } = useSelector((state) => state.auth.user);

    let includesFreeShipping = false;
    
    cart.forEach((product) => {
      if (product.shipping === 1) {
        includesFreeShipping = true;
      }
    });

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PageHero title='checkout' />
            <div className="w-[80%] mx-auto mb-40 mt-24">
                {cart.length < 1 && <CartEmpty />}
                {cart.length > 0 && <CheckoutContent totalPrice={totalPrice} name={name} includesFreeShipping={includesFreeShipping}/>}
            </div>
        </motion.div>
    );
};

export default Checkout;