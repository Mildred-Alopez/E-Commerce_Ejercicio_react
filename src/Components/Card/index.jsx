import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline"

const Card = ({ data }) => {
    const {
        count,
        setCount,
        openProductDetail,
        setProductToShow,
        setCartProducts,
        cartProducts,
        openCheckoutSideMenu,

    } = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        setCount(count + 1)
        setCartProducts([...cartProducts, productData])
        openCheckoutSideMenu()
    }

    const renderIcon = (id) => {
        const isInCart = cartProducts.filter((product) => product.id === id).length > 0

        if (isInCart) {
            return (
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-orange-400 w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="text-black size-5"/>
                </div>
            )
        } else {
            return (
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductsToCart(event, data)}>
                    <PlusIcon
                        className="text-orange-600 size-5" />
                </div>
            )
        }
    }

    return (
        <div className="bg-white cursor-pointer w-56 h-60"
            onClick={() => showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5 rounded-lg" >
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs  m-2 px-3 py-0.5">{data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt="headphones" />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}


export default Card