import React from 'react'
import Order from './Order.jsx'
import styles from './ShowOrders.module.css'
export default function ShowOrders({ orders, DeleteOrder }) {
	let sum = 0
	orders.forEach(el => (sum += Number.parseFloat(el.price)))
	return (
		<>
			{orders.map(order => (
				<Order key={order.id} order={order} DeleteOrder={DeleteOrder} />
			))}
			<p className={styles.sum}>Sum: ${new Intl.NumberFormat().format(sum)}</p>
		</>
	)
}
