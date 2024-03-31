import React from 'react'
import { FaTrash } from 'react-icons/fa'
import styles from './Order.module.css'
export default function Order({ order, DeleteOrder }) {
	const { id, title, img, price } = order
	return (
		<div className={styles.order}>
			<div className={styles['img-container']}>
				<img className={styles.img} src={'/assets/' + img} alt='' />
			</div>
			<h2>{title}</h2>
			<b>${price}</b>
			<FaTrash
				onClick={() => DeleteOrder(id)}
				className={styles['delete-icon']}
			/>
		</div>
	)
}
