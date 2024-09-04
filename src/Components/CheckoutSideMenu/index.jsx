

import { useContext } from 'react'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom'

import { ShoppingCartContext } from '../../Context'
import './style.css'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'

const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts,
        setCartProducts,
        setOrder,
        order,
        setSearchByTitle
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter((products) => products.id != id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed  bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl '> My order</h2>
                <div><XCircleIcon className='size-7 text-orange-400' onClick={() => closeCheckoutSideMenu()} /></div>
            </div>

            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>

            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'> ${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-orange-400 py-3 hover:bg-orange-300 text-white rounded-lg ' onClick={() => handleCheckout()}>Checkout</button>
                </Link>

            </div>

        </aside>
    )
}

export default CheckoutSideMenu