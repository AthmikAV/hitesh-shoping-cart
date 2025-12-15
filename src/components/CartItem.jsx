import {FaMinus,FaPlus,FaTrash } from 'react-icons/fa'
const CartItem = ({ item, onUpadateQuantity, onRemove }) => {
  const { name,price,quantity,id} = item;
  return (
    <div className='p-3 flex justify-between items-center bg-gray-700 mb-3  rounded-sm'>
      <div>
        <h2 className='text-white font-bold w-25'>{name}</h2>
        <p className='text-blue-600 font-bold'>${price}</p>
      </div>
      <div>
        <div className='flex gap-5'>
          <button className='text-white' onClick={()=>onUpadateQuantity(id,quantity - 1)}><FaMinus /></button>
          <span className='text-white'>{quantity}</span>
          <button className='text-white' onClick={()=>onUpadateQuantity(id,quantity + 1)}><FaPlus/></button>
        </div>
      </div>
      <button className='text-red-400'  onClick={()=>onRemove(id)}><FaTrash/></button>
    </div>
  )
}

export default CartItem