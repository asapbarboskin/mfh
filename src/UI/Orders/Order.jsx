import React from 'react'
import { FaTrash } from 'react-icons/fa'
import UseCheckout from '../../Utils/UseOrders.jsx'
import styles from './Order.module.css'
export default function Order({ order }) {
	const { deleteOrder } = UseCheckout()
	const { id, title, img, price } = order
	return (
		<div className={styles.order}>
			<div className={styles['img-container']}>
				<img className={styles.img} src={'/assets/' + img} alt='' />
			</div>
			<h2>{title}</h2>
			<b>${price}</b>
			<FaTrash
				onClick={() => deleteOrder(id)}
				className={styles['delete-icon']}
			/>
		</div>
	)
}
