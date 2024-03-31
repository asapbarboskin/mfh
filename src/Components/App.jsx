import React, { useState } from 'react'
import Categories from '../UI/Categories/Categories.jsx'
import Footer from '../UI/Footer/Footer.jsx'
import Header from '../UI/Header/Header.jsx'
import Items from '../UI/Items/Items.jsx'
import UseOrders from '../Utils/UseOrders.jsx'

function App() {
	const [current, setCurrent] = useState([])
	const { orders, AddToCheckout, DeleteOrder } = UseOrders()
	return (
		<div className='wrapper'>
			<Header orders={orders} DeleteOrder={DeleteOrder} />
			<Categories />
			<Items AddToCheckout={AddToCheckout} />
			<Footer />
		</div>
	)
}

export default App
