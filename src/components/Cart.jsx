import CartItem from './CartItem'
const Cart = ({ cart, onUpadateQuantity, onRemove, total }) => {
    if (cart.length === 0) {
        return <div className='w-130 bg-gray-800 rounded-sm mt-4 p-4 h-fit'>
            <h1 className='text-gray-400 text-center'>No Item Found</h1>
        </div>
    }
  return (
      <div className='w-130 bg-gray-800 rounded-sm mt-4 p-4 h-fit'>
          <h1 className='text-center font-bold text-white my-3'>Cart</h1>
          <div>
              {cart.map((item) => (
                  <div key={item.id}>
                      <CartItem
                          item={item}
                          onUpadateQuantity={onUpadateQuantity}
                          onRemove={onRemove}
                      />
                  </div>
              ))}
          </div>
          <h3 className='text-white font-bold'>Total : ${total}</h3>
          <div className='flex justify-center'>
              <button className='rounded-sm bg-green-500 px-2.5 py-1.5 text-white cursor-pointer'
                  onClick={() => { alert('This feature is not added, Sorry😁')}}>Check Out</button>
          </div>
    </div>
  )
}

export default Cart