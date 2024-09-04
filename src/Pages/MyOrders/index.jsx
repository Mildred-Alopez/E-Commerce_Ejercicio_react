import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context'
import OrdersCard from "../../Components/OrdersCard"



function MyOrders() {
    const { order } = useContext(ShoppingCartContext)
    return (

        <Layout>
            <div className="flex items-center justify-center  relative w-80 mb-2">
                <h1 className="font-medium ">My Orders</h1>
            </div>

            {
                order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts} />

                    </Link>
                ))
            }

        </Layout>
    )
}

export { MyOrders }