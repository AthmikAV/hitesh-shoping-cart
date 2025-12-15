import React from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import { products } from './data/data'
import Cart from './components/Cart'
import { useCart } from './hooks/useCart'


const App = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <div className='bg-black min-h-screen py-10 px-20 overflow-auto'>
      <h1 className='text-white font-bold text-2xl my-5'>Shopping Cart</h1>
      <hr className="border-gray-600 mb-10"/>
      <div className='flex flex-row flex-wrap md:flex-nowrap'>
        <div className='flex flex-wrap justify-center'>
        {products.map((product) => (
          <div key={product.id} className='m-4'>
            <ProductCard
              product={product}
              onAddToCart={addToCart}
            />
          </div>
        ))}
        </div>
        <div className='flex justify-center'>
          <Cart
            cart={cart}
            onUpadateQuantity={updateQuantity}
            onRemove={removeFromCart}
            total={total}
          />
        </div>
      </div>
    </div>
  )
}

export default App