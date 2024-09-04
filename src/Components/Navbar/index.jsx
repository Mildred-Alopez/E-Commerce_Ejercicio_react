import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4 decoration-orange-400 text-orange-400  '
    const {
        cartProducts,setSearchByCategory
    } = useContext(ShoppingCartContext)
    return (

        <nav className="flex justify-between items-center  top-0 fixed z-10 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3 ">
                <li className="font-semibold text-2xl">
                    Shopi
                </li>
                <li className="hover:text-orange-800">
                    <NavLink 
                    onClick={()=> setSearchByCategory()}
                    to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li className="hover:text-orange-800">
                    <NavLink 
                    onClick={()=> setSearchByCategory('clothes')}
                    to='/clothes' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li className="hover:text-orange-800">
                    <NavLink 
                    onClick={()=> setSearchByCategory('electronics')}
                    to='/electronics' className={({ isActive }) => isActive ? activeStyle : undefined} >
                        Electronics
                    </NavLink>
                </li>
                <li className="hover:text-orange-800">
                    <NavLink 
                    onClick={()=> setSearchByCategory('furniture')}
                    to='/furniture' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li className="hover:text-orange-800">
                    <NavLink 
                    onClick={()=> setSearchByCategory('shoes')}
                    to='/shoes' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Shoes
                    </NavLink>
                </li>
                <li className="hover:text-orange-800">
                    <NavLink 
                    onClick={()=> setSearchByCategory('miscellaneous')}
                    to='/miscellaneous'className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>

            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60 hover:text-orange-800">
                    fer@alonzo.com
                </li>
                <li className="hover:text-orange-800">
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li className="hover:text-orange-800">
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li className="hover:text-orange-800">
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>

                <li>
                    <div className="flex">
                        <ShoppingCartIcon className="text-orange-500 size-6" /> {cartProducts.length}
                    </div>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar
