import { useEffect, useState } from 'react'

export default function UseOrders() {
	const getOrdersFromStorage = () => {
		const storedOrders = localStorage.getItem('orders')
		return storedOrders ? JSON.parse(storedOrders) : []
	}

	const updateOrdersInStorage = newOrders => {
		localStorage.setItem('orders', JSON.stringify(newOrders))
	}

	const [orders, setOrders] = useState(getOrdersFromStorage)

	const DeleteOrder = id => {
		setOrders(prevOrders => {
			const updatedOrders = prevOrders.filter(order => order.id !== id)
			updateOrdersInStorage(updatedOrders)
			return updatedOrders
		})
	}

	const AddToCheckout = newOrder => {
		setOrders(prevOrders => {
			let isOrderExist = false
			prevOrders.forEach(order => {
				if (order.id === newOrder.id) isOrderExist = true
			})
			if (!isOrderExist) {
				const updatedOrders = [...prevOrders, newOrder]
				updateOrdersInStorage(updatedOrders)
				return updatedOrders
			} else {
				return prevOrders
			}
		})
	}

	useEffect(() => {
		updateOrdersInStorage(orders)
	}, [orders])

	return { orders, AddToCheckout, DeleteOrder }
}
