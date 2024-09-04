import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard/index.jsx'
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'



function MyOrder() {
    const { order } = useContext(ShoppingCartContext)

    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    if(index === 'last') index = order?.length - 1
    
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-3">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className=' h-6 w-6 cursor-pointer text-black' />
                </Link>
                <h1>My Order</h1>
            </div>

            <div className='flex flex-col w-80  '>
                {order?.[index]?.products.map((product) => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                    />
                ))
                }
            </div>
        </Layout>
    )
}

export { MyOrder }