import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail/index"
import Search from "../../Components/Search"

function Home() {

    const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

    const renderView = () => {

        if (filteredItems?.length > 0) {
            return (
                filteredItems?.map((item) => (
                    <Card
                        key={item.id}
                        data={item} />
                ))
            )
        } else {
            return (
                <Search />
            )
        }
    }
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl ">Exclusive Products</h1>
            </div>
            <input
                className="bg-zinc-100 mb-10 w-96 h-12 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-orange-400 outline-none duration-300 placeholder:text-zinc-500 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-orange-400"
                placeholder="Search a products"
                type="text"
                onChange={(event) => setSearchByTitle(event.target.value)}
            />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}

export { Home }