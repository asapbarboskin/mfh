import { useState } from 'react'

export default function UseOrders() {
	const [orders, setOrders] = useState([])

	function DeleteOrder(id) {
		setOrders(prevOrders => prevOrders.filter(order => order.id !== id))
	}

	function AddToCheckout(newOrder) {
		let isOrderExist = false
		orders.forEach(order => {
			if (order.id === newOrder.id) isOrderExist = true
		})
		if (!isOrderExist) {
			setOrders(prevOrders => [...prevOrders, newOrder])
		}
	}

	return { orders, AddToCheckout, DeleteOrder }
}
