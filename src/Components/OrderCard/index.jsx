import { XCircleIcon } from '@heroicons/react/24/solid'


const OrderCard = props => {
    const { title, imageUrl, price, handleDelete, id } = props

    let rendeXCircleIcon
    if (handleDelete) {
        rendeXCircleIcon = <XCircleIcon
            onClick={() => handleDelete(id)}
            className='size-7 text-orange-400'></XCircleIcon>
    }
    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-ligth'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>$ {price}</p>
                {rendeXCircleIcon}
            </div>
        </div>
    )
}

export default OrderCard
