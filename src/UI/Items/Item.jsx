import React from 'react'
import UseOrders from '../../Utils/UseOrders.jsx'
import styles from './Item.module.css'

export default function Item({ item }) {
	const { title, img, desc, material, price } = item
	const { AddToCheckout } = UseOrders()

	return (
		<div className={styles.Item}>
			<div className={styles['img-container']}>
				<img className={styles.img} src={'/assets/' + img} alt='' />
				<div className={styles['text-overlay']}>
					<p>{desc}</p>
					<p>{material}</p>
				</div>
			</div>
			<h2>{title}</h2>
			<b>${price}</b>
			<div onClick={() => AddToCheckout(item)} className={styles.addToCart}>
				+
			</div>
		</div>
	)
}
