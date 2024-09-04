

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { CalendarDateRangeIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'




const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div
            class="transform transition duration-300  hover:scale-110 rounded-lg shadow-lg h-50 w-80 hover:shadow-xl bg-white"
        >

            <div
                class="bg-gradient-to-br from-rose-100 mt-10   via-purple-200 to-purple-200 m-2 h-3/6 px-5 py-5 pt-2 flex flex-col rounded-lg"
            >
                <div className='flex gap-3 mb-4'>
                    <CalendarDateRangeIcon className='size-5' />
                    <span> 01.02.2023</span>
                </div>
                <span>{totalProducts} articles </span>
                <span className='ms-36  items-center  gap-1 flex w-80'><CurrencyDollarIcon className='size-5' /> {totalPrice}</span>
            </div>
            <div className='p-2'>
                <ChevronRightIcon className='text-violet-800 size-10 m-auto ' />
            </div>
        </div>

    )
}

export default OrdersCard
