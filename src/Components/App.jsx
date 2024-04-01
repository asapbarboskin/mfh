import React from 'react'
import Categories from '../UI/Categories/Categories.jsx'
import Footer from '../UI/Footer/Footer.jsx'
import Header from '../UI/Header/Header.jsx'
import Items from '../UI/Items/Items.jsx'
import UseCurrent from '../Utils/UseCurrent.jsx'
import UseOrders from '../Utils/UseOrders.jsx'

function App() {
	const { orders, AddToCheckout, DeleteOrder } = UseOrders()
	const { current, ChangeCurrent } = UseCurrent()
	return (
		<div className='wrapper'>
			<Header orders={orders} DeleteOrder={DeleteOrder} />
			<Categories ChangeCurrent={ChangeCurrent} />
			<Items current={current} AddToCheckout={AddToCheckout} />
			<Footer />
		</div>
	)
}

export default App
