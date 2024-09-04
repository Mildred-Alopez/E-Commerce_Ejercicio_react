import { useContext } from 'react'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const {
        isProductDetailOpen,
        closeProductDetail,
        productToShow
    } = useContext(ShoppingCartContext)
    return (
        <aside
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed  bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl '> Detail</h2>
                <div><XCircleIcon className='size-7 text-orange-400' onClick={() => closeProductDetail()} /></div>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg object-cover'
                    src={productToShow.images?.[0]} alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-semibold text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-light text-md'>{productToShow.title}</span>
                <span className='font-medium text-xs'>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail