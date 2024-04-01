import React from 'react'
import Categories from '../ui/categories/Categories.jsx'
import Footer from '../ui/footer/Footer.jsx'
import FullItem from '../ui/fullscreenitem/FullItem.jsx'
import Header from '../ui/header/Header.jsx'
import Items from '../ui/items/Items.jsx'
import UseCurrent from '../utils/UseCurrent.jsx'
import UseFullItem from '../utils/UseFullItem.jsx'
import UseOrders from '../utils/UseOrders.jsx'

function App() {
	const { orders, AddToCheckout, DeleteOrder } = UseOrders()
	const { current, ChangeCurrent } = UseCurrent()
	const { showFullItem, HandleShowFullItem, fullItem } = UseFullItem()
	return (
		<div className='wrapper'>
			<Header
				showFullItem={showFullItem}
				orders={orders}
				DeleteOrder={DeleteOrder}
			/>
			<Categories ChangeCurrent={ChangeCurrent} />
			<Items
				current={current}
				AddToCheckout={AddToCheckout}
				HandleShowFullItem={HandleShowFullItem}
			/>
			{showFullItem && (
				<FullItem
					item={fullItem}
					AddToCheckout={AddToCheckout}
					HandleShowFullItem={HandleShowFullItem}
				/>
			)}
			<Footer />
		</div>
	)
}

export default App
