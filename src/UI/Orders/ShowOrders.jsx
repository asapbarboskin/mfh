import React from 'react'
import UseOrders from '../../Utils/UseOrders.jsx'
import Order from '../Orders/Order.jsx'
import styles from './ShowOrders.module.css'
export default function ShowOrders() {
	let { orders } = UseOrders()
	let sum = 0
	orders.forEach(el => (sum += Number.parseFloat(el.price)))
	return (
		<>
			{orders.map(order => (
				<Order key={order.id} order={order} />
			))}
			<p className={styles.sum}>Sum: ${new Intl.NumberFormat().format(sum)}</p>
		</>
	)
}
